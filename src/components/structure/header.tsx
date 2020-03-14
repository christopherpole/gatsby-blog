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
  flex-direction: column;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid ${props => props.theme.colors.defaultBorderColor};
`;

const LogoWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Header = () => (
  <Wrapper>
    <WrapperInner>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Nav />
      <SearchBox />
    </WrapperInner>
  </Wrapper>
);

export default Header;
