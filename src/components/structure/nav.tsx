import React from 'react';
import styled from 'styled-components';

import Link from 'src/components/ui/link';

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  padding: 0;
`;

const LinkWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.large};

  &:last-child {
    margin-right: 0;
  }
`;

const Nav = () => (
  <Wrapper>
    <LinkWrapper>
      <Link to="/">Reviews</Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link to="/">Guides</Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link to="/">Inspiration</Link>
    </LinkWrapper>
  </Wrapper>
);

export default Nav;
