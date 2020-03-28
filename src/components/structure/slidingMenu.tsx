import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ITag from 'src/types/tag';
import SearchBox from 'src/components/searchBox';
import Link from 'src/components/ui/link';

const QUERY = graphql`
  {
    allContentfulTag(filter: { showInNav: { eq: true } }, sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

const SLIDING_MENU_WIDTH = '30rem';

const Wrapper = styled.div<{ slidingMenuState: 'hidden' | 'slidingIn' | 'slidingOut' | 'showing' }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  animation: fadeIn 500ms linear forwards;
  background-color: transparent;

  ${props => props.theme.breakpoints.medium`
    display: none;
  `}

  @keyframes fadeIn {
    from {
      background-color: transparent;
    }

    to {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  @keyframes fadeOut {
    from {
      background-color: rgba(0, 0, 0, 0.8);
    }

    to {
      background-color: transparent;
    }
  }

  ${props =>
    props.slidingMenuState === 'slidingOut' &&
    css`
      animation-name: fadeOut;
    `}
`;

const WrapperInner = styled.div<{
  slidingMenuState: 'hidden' | 'slidingIn' | 'slidingOut' | 'showing';
}>`
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: ${props => props.theme.spacing.large};
  animation: slideIn 500ms ease forwards;
  width: ${SLIDING_MENU_WIDTH};
  right: -${SLIDING_MENU_WIDTH};
  display: flex;
  flex-direction: column;

  @keyframes slideIn {
    from {
      right: -${SLIDING_MENU_WIDTH};
    }

    to {
      right: 0;
    }
  }

  @keyframes slideOut {
    from {
      right: 0;
    }

    to {
      right: -${SLIDING_MENU_WIDTH};
    }
  }

  ${props =>
    props.slidingMenuState === 'slidingOut' &&
    css`
      animation-name: slideOut;
    `}
`;

const CloseButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.sizing.large};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const CloseCopy = styled.span`
  margin-left: ${props => props.theme.spacing.extraSmall};
  font-size: ${props => props.theme.sizing.medium};
`;

const StyledSearchBox = styled(SearchBox)`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const NavContainer = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  flex: 1;
`;

const StyledNav = styled.nav`
  margin-bottom: ${props => props.theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
`;

const NavHeader = styled.p`
  font-size: ${props => props.theme.sizing.large};
  margin-bottom: ${props => props.theme.spacing.xxs};
  font-weight: bold;
`;

const LinksWrapper = styled.ul`
  padding: 0;
`;

const LinkWrapper = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  list-style-type: none;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled(Link)<{ onClick: () => void }>`
  padding: ${props => props.theme.spacing.xxs} 0;
  display: block;
`;

interface IProps {
  slidingMenuState: 'hidden' | 'slidingIn' | 'slidingOut' | 'showing';
  setSlidingMenuState: (state: 'hidden' | 'slidingIn' | 'slidingOut' | 'showing') => void;
}

const SlidingMenu = ({ slidingMenuState, setSlidingMenuState }: IProps) => {
  const {
    allContentfulTag: { nodes },
  } = useStaticQuery(QUERY);

  const closeSlidingMenu = () => {
    setSlidingMenuState('slidingOut');
  };

  return (
    <Wrapper
      slidingMenuState={slidingMenuState}
      onAnimationEnd={() => {
        if (slidingMenuState === 'slidingIn') {
          setSlidingMenuState('showing');
        } else if (slidingMenuState === 'slidingOut') {
          setSlidingMenuState('hidden');
        }
      }}
    >
      <WrapperInner slidingMenuState={slidingMenuState}>
        <CloseButton onClick={closeSlidingMenu}>
          <FontAwesomeIcon icon={faTimes} />
          <CloseCopy>Close</CloseCopy>
        </CloseButton>
        <NavContainer>
          <StyledSearchBox onSearch={closeSlidingMenu} />
          <StyledNav>
            <NavHeader>Categories</NavHeader>
            <LinksWrapper>
              {nodes.map(({ id, name, slug }: ITag) => (
                <LinkWrapper key={id}>
                  <StyledLink onClick={closeSlidingMenu} to={`/tag/${slug}`}>
                    {name}
                  </StyledLink>
                </LinkWrapper>
              ))}
            </LinksWrapper>
          </StyledNav>
          <StyledNav>
            <NavHeader>Links</NavHeader>
            <LinksWrapper>
              <LinkWrapper>
                <StyledLink onClick={closeSlidingMenu} to="/">
                  Home
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink onClick={closeSlidingMenu} to="/terms">
                  Terms and Conditions
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink onClick={closeSlidingMenu} to="/privacy">
                  Privary Policy
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink onClick={closeSlidingMenu} to="/disclaimer">
                  Affiliate Disclaimer
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink onClick={closeSlidingMenu} to="/contact">
                  Contact
                </StyledLink>
              </LinkWrapper>
            </LinksWrapper>
          </StyledNav>
        </NavContainer>
      </WrapperInner>
    </Wrapper>
  );
};

export default SlidingMenu;
