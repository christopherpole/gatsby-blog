import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/structure/logo';
import Nav from 'src/components/structure/nav';
import SearchBox from 'src/components/structure/searchBox';

const Wrapper = styled.header`
  width: 100%;
  margin: auto;
  max-width: ${props => props.theme.maxPageWidth};
  padding: 0 ${props => props.theme.spacing.large};
`;

const WrapperInner = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing.large} 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: inline-flex;
`;

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
