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
    line-height: 1.5;
    color: ${props => props.theme.colors.fonts.primary};
  }
  
  img {
    height: auto;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  ul, ol {
    padding-left: 2rem;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote {
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing.small};

    &:last-child {
      margin-bottom: 0;
    }
  }

  hr {
    margin-top: ${props => props.theme.spacing.large};
    margin-bottom: ${props => props.theme.spacing.large};
  }
`;
