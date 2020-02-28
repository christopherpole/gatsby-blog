import { css } from 'styled-components';
import { darken } from 'polished';

export default css`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  transition: color 200ms linear;
  color: ${props => props.theme.colors.primary};

  &:hover,
  &:focus {
    color: ${props => darken(0.1, props.theme.colors.primary)};
  }
`;
