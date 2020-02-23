import React from 'react';

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

const Header = () => {
  const data = useStaticQuery(QUERY);

  return (
    <div>
      <Logo />
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  );
};

export default Header;
