import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'src/theme';
import GlobalStyles from 'src/globalStyles';

interface IProps {
  element: React.ReactNode;
}

export default ({ element }: IProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
