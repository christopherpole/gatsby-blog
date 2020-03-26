import { css } from 'styled-components';
import { darken } from 'polished';

export default css<{ altStyle?: boolean }>`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  transition: ${props =>
    `color ${props.theme.transitions.duration} ${props.theme.transitions.easing}`};
  color: ${props =>
    props.altStyle ? props.theme.colors.fonts.secondary : props.theme.colors.primary};

  &:hover,
  &:focus {
    color: ${props =>
      props.altStyle ? props.theme.colors.secondary : darken(0.1, props.theme.colors.primary)};
  }
`;
