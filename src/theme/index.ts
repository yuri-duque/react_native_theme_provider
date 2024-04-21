export type Colors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
};

export type Sizes = {
  base: number;
  text: number;
  radius: number;
  padding: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  label: number;
};

export type Spacings = {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
};

export type Theme = {
  colors: Colors;
  sizes: Sizes;
  spacing: Spacings;
};

type ThemeSheme = {
  dark: Colors;
  light: Colors;
  sizes: Sizes;
  spacing: Spacings;
};

export const defaultTheme: ThemeSheme = {
  dark: {
    primary: "#E6DDC4",
    secondary: "#678983",
    background: "#181D31",
    text: "#E6DDC4",
    error: "#AE445A",
  },
  light: {
    primary: "#678983",
    secondary: "#E6DDC4",
    background: "#F0E9D2",
    text: "#181D31",
    error: "#AE445A",
  },
  sizes: {
    base: 8,
    text: 14,
    radius: 4,
    padding: 20,
    h1: 44,
    h2: 40,
    h3: 32,
    h4: 24,
    h5: 18,
    label: 16,
  },
  spacing: {
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    md: 20,
    l: 24,
    xl: 28,
    xxl: 32,
  },
};
