import 'styled-components';

import { ITheme } from 'src/theme';

declare module 'styled-components' {
  interface DefaultTheme extends ITheme {}
}
