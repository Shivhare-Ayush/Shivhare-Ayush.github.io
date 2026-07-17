import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);

const useTheme = () => useContext(ThemeContext);

export default useTheme;
