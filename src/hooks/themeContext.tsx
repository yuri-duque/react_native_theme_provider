import React, { useState, createContext, useContext } from "react";
import { Colors, Theme, defaultTheme } from "../theme";

type ThemeContextType = {
  getTheme: () => Theme;
  changeTheme: () => void;
};

const defaultThemeContext: ThemeContextType = {
  getTheme: (): Theme => {
    return {
      colors: defaultTheme.light,
      sizes: defaultTheme.sizes,
      spacing: defaultTheme.spacing,
    };
  },
  changeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const getTheme = () => {
    let colors: Colors;
    if (isDark) colors = defaultTheme.dark;
    else colors = defaultTheme.light;

    const theme: Theme = {
      colors,
      sizes: defaultTheme.sizes,
      spacing: defaultTheme.spacing,
    };

    return theme;
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ getTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { getTheme } = useContext(ThemeContext);
  return getTheme();
};

export { ThemeProvider, ThemeContext, useTheme };
