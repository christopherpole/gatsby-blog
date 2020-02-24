import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/logo';
import Nav from 'src/components/nav';
import { graphql, useStaticQuery } from 'gatsby';

export const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Wrapper = styled.header`
  background: green;
  width: 100%;
`;

const WrapperInner = styled.div`
  max-width: ${props => props.theme.maxPageWidth};
  padding: ${props => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const LogoWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Header = () => {
  // const data = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <WrapperInner>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav />
      </WrapperInner>
    </Wrapper>
  );
};

export default Header;
