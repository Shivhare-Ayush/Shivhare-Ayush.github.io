// import React from 'react'
import { useState, useEffect } from 'react'
import Page1 from './pages/Page1'
import useMousePosition from './hooks/useMousePosition'

const PARTICLE_LIFETIME = 750 // ms

const App = () => {
  const { mousePosition } = useMousePosition()
  const { x, y } = mousePosition
  const [particles, setParticles] = useState([])
  const [lastParticleTime, setLastParticleTime] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  // Add a particle on mouse move
  useEffect(() => {
    if (x === null || y === null) return;
    const now = Date.now();
    if (now - lastParticleTime < 16) return; // ~60fps
    setLastParticleTime(now);

    const pageHeight = document.documentElement.scrollHeight;
    const maxY = pageHeight - 100;
    const clampedY = Math.min(y, maxY);
    const id = now + Math.random();
    setParticles(particles => {
      const next = [...particles, { id, x, y: clampedY }]
      return next.length > 100 ? next.slice(next.length - 100) : next
    })
    // Remove after lifetime
    const timeout = setTimeout(() => {
      setParticles(particles => particles.filter(p => p.id !== id))
    }, PARTICLE_LIFETIME)
    return () => clearTimeout(timeout)
  }, [x, y, lastParticleTime])

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

  return (
    <div className="relative flex transition-all duration-50">
      <div
        className='fixed inset-0 bg-gradient-to-r from-[#0C0A09] via-[#302C27] to-[#0C0A09] mask-grid-pattern'
        style={{ zIndex: 0, pointerEvents: 'none' }} // <-- Add this!
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
              filter: 'blur(10px)',
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
          className="fixed bottom-8 left-8 z-50 bg-purple-700 text-white rounded-full p-3 shadow-lg hover:bg-purple-500 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
      {/* Add fadeout keyframes */}
      <style>
        {`
          @keyframes fadeout {
            0%   { opacity: 0.1; background: #8B5CF6; }
            50%  { opacity: 0.7; background: #EC4899; }
            80% { opacity: .1;   background: #3B82F6; }
            100% { opacity: 0;   background: #3B82F6; }
          }
        `}
      </style>
    </div>
  )
}

export default App
