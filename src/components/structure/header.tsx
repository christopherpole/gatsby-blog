import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/structure/logo';
import Nav from 'src/components/structure/nav';
import SearchBox from 'src/components/structure/searchBox';

const Wrapper = styled.header`
  width: 100%;
`;

const WrapperInner = styled.div`
  padding: ${props => props.theme.spacing.large} 0;
  max-width: ${props => props.theme.maxPageWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid ${props => props.theme.colors.defaultBorderColor};
`;

const LogoWrapper = styled.div``;

const NavSearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <Wrapper>
    <WrapperInner>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavSearchWrapper>
        <Nav />
        <SearchBox />
      </NavSearchWrapper>
    </WrapperInner>
  </Wrapper>
);

export default Header;
