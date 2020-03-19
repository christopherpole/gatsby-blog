import { css } from 'styled-components';
import { darken } from 'polished';

export default css<{ disabled?: boolean }>`
  display: inline-block;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fonts.secondary};
  padding: ${props => props.theme.spacing.small};
  border: none;
  text-decoration: none;
  transition: background-color 200ms linear;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }

  ${props =>
    props.disabled &&
    css`
      &,
      &:focus,
      &:hover {
        background-color: #ccc;
        cursor: auto;
      }
    `}
`;
