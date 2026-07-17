# Goal: Particle Trail Performance

The mouse particle effect used `useState` for the throttle timestamp,
causing an extra React re-render on every spawn. This also prevented
safely raising the spawn frequency.

## Changes

- Replace `lastParticleTime` state with `useRef` — eliminates extra re-render per spawn
- Lower throttle interval from 16ms → 8ms (~120fps cap, now costs almost nothing)
- Raise particle cap from 100 → 150
- Increase blur radius from 10px → 15px for smoother trail blending
- Extract `SPAWN_INTERVAL` and `MAX_PARTICLES` as named constants

## Files
- src/App.jsx

## Status
DONE
