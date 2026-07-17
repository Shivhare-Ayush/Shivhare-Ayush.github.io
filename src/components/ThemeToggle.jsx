import useTheme from '../theme/useTheme';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { mode, toggleMode, presetId, setPresetId, presets } = useTheme();
  const activePreset = presets.find(p => p.id === presetId) || presets[0];

  return (
    <div className="flex flex-col gap-3 mt-6">
      {/* Mode toggle */}
      <button
        onClick={toggleMode}
        aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="flex items-center gap-2 transition-all duration-200 hover:scale-105 w-fit"
        style={{ color: 'var(--text-muted)' }}
      >
        {mode === 'dark' ? (
          <BsSun className="text-lg" />
        ) : (
          <BsMoon className="text-lg" />
        )}
        <span className="font-[Anzo1] text-xs">{mode === 'dark' ? 'Light mode' : 'Dark mode'}</span>
      </button>

      {/* Preset swatches — 2 rows of 5 */}
      <div className="flex flex-wrap gap-2" style={{ maxWidth: '130px' }}>
        {presets.map(preset => (
          <button
            key={preset.id}
            onClick={() => setPresetId(preset.id)}
            aria-label={`Set gradient preset: ${preset.label}`}
            title={`${preset.label} — ${preset.description}`}
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: preset.swatch,
              outline: presetId === preset.id ? '2px solid var(--text)' : '2px solid transparent',
              outlineOffset: '2px',
              transition: 'outline-color 0.15s ease, transform 0.15s ease',
              cursor: 'pointer',
              border: 'none',
              padding: 0,
              transform: presetId === preset.id ? 'scale(1.2)' : 'scale(1)',
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Active preset name + description */}
      <div style={{ color: 'var(--text-muted)' }}>
        <p className="font-[Anzo1] text-xs leading-tight">{activePreset.label}</p>
        <p className="font-[Anzo1] text-xs leading-tight mt-0.5" style={{ fontSize: '10px' }}>
          {activePreset.description}
        </p>
      </div>
    </div>
  );
};

export default ThemeToggle;
