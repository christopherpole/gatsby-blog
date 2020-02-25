import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const Link = styled.a`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.large};
  transition: color 200ms linear;
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Nav = () => (
  <Wrapper>
    <Link href="/">Reviews</Link>
    <Link href="/">Guides</Link>
    <Link href="/">Inspiration</Link>
  </Wrapper>
);

export default Nav;
