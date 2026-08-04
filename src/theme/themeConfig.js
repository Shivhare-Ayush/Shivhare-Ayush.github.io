// @AgentInstructions
// This file is the single source of truth for all theme presets.
// To add a new preset: push a new object into GRADIENT_PRESETS.
// Each preset needs: id, label, description, swatch (CSS background string), keyframes string.
// For mesh/radial presets, swatch can be a multi-stop gradient string for the dot preview.
// Keyframes animate through the dominant color stops sequentially.

export const GRADIENT_PRESETS = [
  // ── Original 4 ─────────────────────────────────────────────────────────────
  {
    id: 'neonStorm',
    label: 'Neon Storm',
    description: 'Indigo → deep pink → coral — electric and warm',
    swatch: 'linear-gradient(135deg, #4B0082, #FF1493, #FE865B)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #4B0082; }
        50%  { opacity: 0.7; background: #FF1493; }
        80%  { opacity: 0.1; background: #FE865B; }
        100% { opacity: 0;   background: #FE865B; }
      }
    `,
  },
  {
    id: 'softHorizon',
    label: 'Soft Horizon',
    description: 'Sky blue → cream → grapefruit — airy and pastel',
    swatch: 'linear-gradient(135deg, #55A8F7, #FFEDD5, #FF6B6B)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #55A8F7; }
        50%  { opacity: 0.7; background: #FFEDD5; }
        80%  { opacity: 0.1; background: #FF6B6B; }
        100% { opacity: 0;   background: #FF6B6B; }
      }
    `,
  },
  {
    id: 'classic',
    label: 'Classic',
    description: 'Purple → pink → blue — original site palette',
    swatch: 'linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #8B5CF6; }
        50%  { opacity: 0.7; background: #EC4899; }
        80%  { opacity: 0.1; background: #3B82F6; }
        100% { opacity: 0;   background: #3B82F6; }
      }
    `,
  },
  {
    id: 'sunsetBloom',
    label: 'Sunset Bloom',
    description: 'Coral → gold → soft violet — warm dusk feel',
    swatch: 'linear-gradient(135deg, #FF6B6B, #FFD93D, #C780FA)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #FF6B6B; }
        50%  { opacity: 0.7; background: #FFD93D; }
        80%  { opacity: 0.1; background: #C780FA; }
        100% { opacity: 0;   background: #C780FA; }
      }
    `,
  },

  // ── Mesh / Radial combos ────────────────────────────────────────────────────
  {
    id: 'apricotGlow',
    label: 'Apricot Glow',
    description: 'Obsidian black → vivid violet → warm apricot — deep and glowing',
    swatch: 'linear-gradient(135deg, #0B130E, #9932CC, #FFDAB9)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #0B130E; }
        40%  { opacity: 0.7; background: #9932CC; }
        80%  { opacity: 0.3; background: #FFDAB9; }
        100% { opacity: 0;   background: #FFDAB9; }
      }
    `,
  },
  {
    id: 'lilacWhisper',
    label: 'Lilac Whisper',
    description: 'Magenta flame → cotton candy → white lilac — soft and romantic',
    swatch: 'linear-gradient(135deg, #C71585, #FFB6C1, #FFF0F5)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #C71585; }
        50%  { opacity: 0.7; background: #FFB6C1; }
        80%  { opacity: 0.2; background: #FFF0F5; }
        100% { opacity: 0;   background: #FFF0F5; }
      }
    `,
  },
  {
    id: 'aquamarine',
    label: 'Aquamarine',
    description: 'Teal blue → strong cyan → aquamarine — cool ocean depth',
    swatch: 'linear-gradient(135deg, #0077BE, #00CED1, #7FFFD4)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #0077BE; }
        50%  { opacity: 0.7; background: #00CED1; }
        80%  { opacity: 0.2; background: #7FFFD4; }
        100% { opacity: 0;   background: #7FFFD4; }
      }
    `,
  },
  {
    id: 'orchidRadiance',
    label: 'Orchid Radiance',
    description: 'Midnight violet → royal amethyst → orchid — dark and regal',
    swatch: 'linear-gradient(135deg, #2E0854, #800080, #DA70D6)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #2E0854; }
        50%  { opacity: 0.7; background: #800080; }
        80%  { opacity: 0.2; background: #DA70D6; }
        100% { opacity: 0;   background: #DA70D6; }
      }
    `,
  },
  {
    id: 'tropicalMesh',
    label: 'Tropical Mesh',
    description: 'Teal → burnt peach → yellow — warm retro mesh glow',
    swatch: 'linear-gradient(135deg, #0077BE, #E2725B, #FFFF00)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #0077BE; }
        40%  { opacity: 0.7; background: #E2725B; }
        80%  { opacity: 0.3; background: #FFFF00; }
        100% { opacity: 0;   background: #FFFF00; }
      }
    `,
  },
  {
    id: 'electricAqua',
    label: 'Electric Aqua',
    description: 'Electric aqua → dark amethyst → magenta — cyber neon',
    swatch: 'linear-gradient(135deg, #00E5FF, #1A0033, #FF00FF)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #00E5FF; }
        50%  { opacity: 0.7; background: #1A0033; }
        80%  { opacity: 0.3; background: #FF00FF; }
        100% { opacity: 0;   background: #FF00FF; }
      }
    `,
  },
  {
    id: 'crimsonUltrasonic',
    label: 'Crimson Ultrasonic',
    description: 'Ultrasonic blue → crimson carrot → antique white — electric dusk glow',
    swatch: 'linear-gradient(135deg, #0C10E3, #FF4500, #F8E6D2)',
    keyframes: `
      @keyframes fadeout {
        0%   { opacity: 0.1; background: #0C10E3; }
        50%  { opacity: 0.7; background: #FF4500; }
        80%  { opacity: 0.3; background: #F8E6D2; }
        100% { opacity: 0;   background: #F8E6D2; }
      }
    `,
  },
];

export const DEFAULT_MODE = 'dark';
export const DEFAULT_PRESET = 'crimsonUltrasonic';

export const LS_KEY_MODE = 'portfolio-theme-mode';
export const LS_KEY_PRESET = 'portfolio-theme-preset';
