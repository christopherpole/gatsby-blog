import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  margin-bottom: ${props => props.theme.spacing.small};
  transition: color 200ms linear;

  &:hover,
  &:focus,
  &.current {
    color: ${props => props.theme.colors.primary};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  to: string;
  children: React.ReactNode;
}

const StyledLink = (props: IProps) => <Wrapper activeClassName="current" {...props} />;

export default StyledLink;
