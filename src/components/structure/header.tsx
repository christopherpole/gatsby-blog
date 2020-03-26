import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/structure/logo';
import Nav from 'src/components/structure/nav';
import SearchBox from 'src/components/structure/searchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.header`
  width: 100%;
  margin: auto;
  max-width: ${props => props.theme.maxPageWidth};
  padding: 0 ${props => props.theme.spacing.large};
`;

const WrapperInner = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacing.large} 0;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  width: 100%;
  justify-content: space-between;
`;

const HamburgerMenu = styled.button`
  font-size: ${props => props.theme.sizing.large};
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  ${props => props.theme.breakpoints.medium`
    display: none;
  `}
`;

const LogoWrapper = styled.div`
  display: inline-flex;
`;

const NavSearchWrapper = styled.div`
  display: none;

  ${props => props.theme.breakpoints.medium`
    display: flex;
    align-items: center;
  `}
`;

interface IProps {
  showSlidingMenu: () => void;
}

const Header = ({ showSlidingMenu }: IProps) => (
  <Wrapper>
    <WrapperInner>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <HamburgerMenu onClick={showSlidingMenu}>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerMenu>
      <NavSearchWrapper>
        <Nav />
        <SearchBox />
      </NavSearchWrapper>
    </WrapperInner>
  </Wrapper>
);

export default Header;
