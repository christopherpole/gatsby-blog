const theme = {
  maxPageWidth: '100rem',
  colors: {
    primary: '#228B22',
    secondary: '#ff3434',
    tertiary: '#f8f8f8',
    quaternary: '#373941',
    border: '#e8e8e8',
    disabled: '#ccc',
    error: {
      primary: '#f00',
      secondary: '#fcc',
    },
    fonts: {
      primary: '#444',
      secondary: '#fff',
      tertiary: '#666',
    },
  },
  spacing: {
    extraLarge: '3rem',
    large: '2.5rem',
    medium: '1rem',
    small: '.5rem',
    extraSmall: '.25rem',
  },
  sizing: {
    extraLarge: '3rem',
    large: '2rem',
    medium: '1.6rem',
    small: '1.4rem',
  },
};

export type ITheme = typeof theme;

export default theme;
