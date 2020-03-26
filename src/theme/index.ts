import { css } from 'styled-components';

const createMediaQuery = (width: string) => {
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => css`
    @media (min-width: ${width}) {
      //  @ts-ignore
      ${css(...args)}
    }
  `;
};

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
    input: {
      background: '#fff',
      border: '#aaa',
    },
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
    xxl: '4rem',
    extraLarge: '3rem',
    large: '2.5rem',
    medium: '2rem',
    small: '1.5rem',
    extraSmall: '1rem',
    xxs: '.5rem',
  },
  sizing: {
    xxl: '3.4rem',
    extraLarge: '2.4rem',
    large: '2rem',
    medium: '1.6rem',
    small: '1.4rem',
    extraSmall: '1.2rem',
    xxs: '1rem',
  },
  breakpoints: {
    small: createMediaQuery('23em'),
    medium: createMediaQuery('45em'),
    large: createMediaQuery('60em'),
  },
};

export type ITheme = typeof theme;

export default theme;
