import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './useTheme';
import {
  GRADIENT_PRESETS,
  DEFAULT_MODE,
  DEFAULT_PRESET,
  LS_KEY_MODE,
  LS_KEY_PRESET,
} from './themeConfig';

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem(LS_KEY_MODE) || DEFAULT_MODE;
  });

  const [presetId, setPresetId] = useState(() => {
    return localStorage.getItem(LS_KEY_PRESET) || DEFAULT_PRESET;
  });

  // Sync mode to <html data-theme> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem(LS_KEY_MODE, mode);
  }, [mode]);

  // Sync preset to localStorage
  useEffect(() => {
    localStorage.setItem(LS_KEY_PRESET, presetId);
  }, [presetId]);

  // Apply saved mode on first render
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMode = () => setMode(m => (m === 'dark' ? 'light' : 'dark'));

  const activePreset = GRADIENT_PRESETS.find(p => p.id === presetId) || GRADIENT_PRESETS[0];

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
        presetId,
        setPresetId,
        activePreset,
        presets: GRADIENT_PRESETS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
