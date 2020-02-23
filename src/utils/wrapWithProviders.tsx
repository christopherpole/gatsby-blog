import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'src/theme';

interface IProps {
  element: React.ReactNode;
}

export default ({ element }: IProps) => <ThemeProvider theme={theme}>{element}</ThemeProvider>;
