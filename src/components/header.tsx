import React from 'react';
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
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  );
};

export default Header;
