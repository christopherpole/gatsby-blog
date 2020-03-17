const theme = {
  maxPageWidth: '100rem',
  colors: {
    primary: '#70c168',
    secondary: '#f8f8f8',
    primaryFont: '#161e26',
    secondaryFont: '#fff',
    defaultBorderColor: '#e8e8e8',
  },
  spacing: {
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
  },
  sizing: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
};

export type ITheme = typeof theme;

export default theme;
