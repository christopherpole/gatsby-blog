import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/logo';
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

const Wrapper = styled.header``;

const Header = () => {
  const data = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Logo />
      <h1>{data.site.siteMetadata.title}</h1>
    </Wrapper>
  );
};

export default Header;
