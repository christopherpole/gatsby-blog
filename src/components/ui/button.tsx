import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondaryFont};
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

interface IProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ButtonLink = (props: IProps) => <Wrapper {...props} />;

export default ButtonLink;
