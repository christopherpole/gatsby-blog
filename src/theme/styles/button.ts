import { css } from 'styled-components';
import { darken } from 'polished';

export default css<{ disabled?: boolean; alternate?: boolean }>`
  display: inline-block;
  background-color: ${props =>
    props.alternate ? props.theme.colors.secondary : props.theme.colors.primary};
  color: ${props => props.theme.colors.fonts.secondary};
  padding: ${props => props.theme.spacing.medium};
  border: none;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
  transition: background-color 200ms linear;

  &:focus,
  &:hover {
    background-color: ${props =>
      darken(0.2, props.alternate ? props.theme.colors.secondary : props.theme.colors.primary)};
  }

  ${props =>
    props.disabled &&
    css`
      &,
      &:focus,
      &:hover {
        pointer-events: none;
        background-color: ${props.theme.colors.disabled};
        cursor: auto;
      }
    `}
`;
