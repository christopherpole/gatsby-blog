import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';

const Wrapper = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondaryFont};
  padding: ${props => props.theme.spacing.small};
  border: none;
  text-decoration: none;
  transition: background-color 200ms linear;

  &:focus,
  &:hover {
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }
`;

interface IProps {
  children: string;
  to: string;
}

const ButtonLink = ({ children, to }: IProps) => <Wrapper to={to}>{children}</Wrapper>;

export default ButtonLink;
