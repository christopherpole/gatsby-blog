import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-sticky-el';

import Logo from 'src/components/structure/logo';
import Nav from 'src/components/structure/nav';
import SearchBox from 'src/components/searchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled(Sticky)`
  width: 100%;
  padding: 0 ${props => props.theme.spacing.large};
  background: ${props => props.theme.colors.background};
  transition-timing-function: ${props => props.theme.transitions.easing};
  transition-duration: ${props => props.theme.transitions.duration};
  transition-property: box-shadow, padding;
  z-index: 2;

  &.stuck {
    padding: 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;

const WrapperInner = styled.div`
  padding: ${props => props.theme.spacing.large} 0;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  width: 100%;
  transition-timing-function: ${props => props.theme.transitions.easing};
  transition-duration: ${props => props.theme.transitions.duration};
  transition-property: max-width, padding;
  max-width: ${props => `calc(${props.theme.maxPageWidth} - (${props.theme.spacing.large} * 2))`};
  margin: auto;

  .stuck & {
    padding: ${props => props.theme.spacing.extraSmall} ${props => props.theme.spacing.large};
    max-width: 100%;
  }
`;

const WrapperInnerInner = styled.div`
  margin: auto;
  max-width: ${props => `calc(${props.theme.maxPageWidth} - (${props.theme.spacing.large} * 2))`};
  display: flex;
  justify-content: center;
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
  width: 12rem;
  transition: ${props =>
    `width ${props.theme.transitions.duration} ${props.theme.transitions.easing}`};

  .stuck & {
    width: 10rem;
  }
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
  <Wrapper stickyClassName="stuck">
    <WrapperInner>
      <WrapperInnerInner>
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
      </WrapperInnerInner>
    </WrapperInner>
  </Wrapper>
);

export default Header;
