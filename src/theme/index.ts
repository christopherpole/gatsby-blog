const theme = {
  maxPageWidth: '100rem',
  colors: {
    primary: '#41961f',
    secondary: '#ff6969',
    tertiary: '#f8f8f8',
    quaternary: '#373941',
    border: '#e8e8e8',
    disabled: '#ccc',
    error: {
      primary: '#f00',
      secondary: '#f00',
    },
    fonts: {
      primary: '#444',
      secondary: '#fff',
    },
  },
  spacing: {
    extraSmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    extraLarge: '3rem',
  },
  sizing: {
    extraSmall: '.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    extraLarge: '2.5rem',
  },
};

export type ITheme = typeof theme;

export default theme;
