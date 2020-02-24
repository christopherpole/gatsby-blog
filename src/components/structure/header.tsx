import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/structure/logo';
import Nav from 'src/components/structure/nav';

const Wrapper = styled.header`
  width: 100%;
`;

const WrapperInner = styled.div`
  max-width: ${props => props.theme.maxPageWidth};
  padding: ${props => props.theme.spacing.large};
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
    </WrapperInner>
  </Wrapper>
);

export default Header;
