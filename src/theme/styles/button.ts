import { css } from 'styled-components';
import { darken } from 'polished';

export default css<{ disabled?: boolean; submitting?: boolean; altStyle?: boolean }>`
  display: inline-block;
  background-color: ${props =>
    props.altStyle ? props.theme.colors.secondary : props.theme.colors.primary};
  color: ${props => props.theme.colors.fonts.secondary};
  padding: ${props => props.theme.spacing.small};
  border: none;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
  transition: ${props =>
    `background-color ${props.theme.transitions.duration} ${props.theme.transitions.easing}`};
  font-weight: bold;
  position: relative;
  user-select: none;

  &:focus,
  &:hover {
    background-color: ${props =>
      darken(0.2, props.altStyle ? props.theme.colors.secondary : props.theme.colors.primary)};
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.disabled};
      cursor: auto;

      &:focus,
      &:hover {
        background-color: ${props.theme.colors.disabled};
      }
    `}
`;
