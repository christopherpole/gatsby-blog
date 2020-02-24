import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Karla', HelveticaNeue, "Helvetica Neue", sans-serif;
    font-size: ${props => props.theme.sizing.medium};
    color: ${props => props.theme.colors.primaryFont};
  }
  
  img {
    height: auto;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;
