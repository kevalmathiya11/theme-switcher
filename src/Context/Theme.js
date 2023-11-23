import { createContext, useContext } from "react";

export const themeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  const contextValue = useContext(themeContext);
  const { themeMode, lightMode, darkMode } = contextValue;

  return [themeMode, lightMode, darkMode];
}
