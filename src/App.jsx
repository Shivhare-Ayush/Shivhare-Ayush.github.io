// import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Page1 from './pages/Page1'
import useMousePosition from './hooks/useMousePosition'
import useTheme from './theme/useTheme'

const PARTICLE_LIFETIME = 750 // ms
const SPAWN_INTERVAL    = 8   // ms — ~120fps cap, no state re-render cost
const MAX_PARTICLES     = 150 // max alive at once

const App = () => {
  const { activePreset, mode } = useTheme()
  const { mousePosition } = useMousePosition()
  const { x, y } = mousePosition
  const [particles, setParticles] = useState([])
  const lastParticleTime = useRef(0)
  const [showScroll, setShowScroll] = useState(false);

  // Add a particle on mouse move
  useEffect(() => {
    if (x === null || y === null) return;
    const now = Date.now();
    if (now - lastParticleTime.current < SPAWN_INTERVAL) return;
    lastParticleTime.current = now;

    const pageHeight = document.documentElement.scrollHeight;
    const maxY = pageHeight - 100;
    const clampedY = Math.min(y, maxY);
    const id = now + Math.random();
    setParticles(particles => {
      const next = [...particles, { id, x, y: clampedY }]
      return next.length > MAX_PARTICLES ? next.slice(next.length - MAX_PARTICLES) : next
    })
    // Remove after lifetime
    const timeout = setTimeout(() => {
      setParticles(particles => particles.filter(p => p.id !== id))
    }, PARTICLE_LIFETIME)
    return () => clearTimeout(timeout)
  }, [x, y])

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bgFrom = mode === 'light' ? '#EEE5DA' : '#0C0A09'
  const bgMid  = mode === 'light' ? '#D9CFC4'  : '#302C27'

  return (
    <div className="relative flex transition-all duration-50">
      <div
        className="fixed inset-0 mask-grid-pattern"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
          background: `linear-gradient(to right, ${bgFrom}, ${bgMid}, ${bgFrom})`,
          transition: 'background 0.3s ease',
        }}
      >
        {particles.map(particle => (
          <div
            key={particle.id}
            className="pointer-events-none absolute transition-opacity duration-700"
            style={{
              left: particle.x,
              top: particle.y - window.scrollY, // <-- Adjust for scroll
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(15px)',
              opacity: 0.7,
              animation: `fadeout ${PARTICLE_LIFETIME}ms forwards`
            }}
          ></div>
        ))}
      </div>
      
      <Page1 />
      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-transparent backdrop-blur-sm border border-[var(--border)] text-[var(--text)] rounded-full p-3 hover:text-purple-400 hover:border-purple-400 transition-all duration-200"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
      {/* Gradient preset keyframes — driven by active theme preset */}
      <style>{activePreset.keyframes}</style>
    </div>
  )
}

export default App
