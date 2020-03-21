const theme = {
  maxPageWidth: '110rem',
  colors: {
    primary: '#28AC28',
    background: '#fff',
    secondary: '#ff3434',
    tertiary: '#222222',
    quaternary: '#191919',
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
  transitions: {
    duration: '200ms',
    easing: 'linear',
  },
  spacing: {
    extraLarge: '4rem',
    large: '3rem',
    medium: '2rem',
    small: '1rem',
    extraSmall: '.5rem',
  },
  sizing: {
    extraLarge: '3rem',
    large: '2rem',
    medium: '1.6rem',
    small: '1.4rem',
    extraSmall: '1.2rem',
  },
};

export type ITheme = typeof theme;

export default theme;
