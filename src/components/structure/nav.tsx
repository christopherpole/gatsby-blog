import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const Link = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.large};
  cursor: pointer;
  transition: color 200ms linear;

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
    <Link>Reviews</Link>
    <Link>Guides</Link>
    <Link>Inspiration</Link>
  </Wrapper>
);

export default Nav;
