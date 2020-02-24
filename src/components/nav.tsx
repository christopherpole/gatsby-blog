import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  background-color: yellow;
  display: flex;
  padding: 0;
  margin: 0;
`;

const LinkWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.medium};

  &:last-child {
    margin-right: 0;
  }
`;

const Nav = () => (
  <Wrapper>
    <LinkWrapper>a</LinkWrapper>
    <LinkWrapper>a</LinkWrapper>
    <LinkWrapper>a</LinkWrapper>
  </Wrapper>
);

export default Nav;
