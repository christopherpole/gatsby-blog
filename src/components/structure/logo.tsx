import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export const QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    image: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  max-width: 100%;
`;

const StyledImg = styled(Img)`
  width: 200px;
`;

const Logo = () => {
  const data = useStaticQuery(QUERY);

  return (
    <StyledLink to="/">
      <StyledImg fluid={data.image.childImageSharp.fluid} alt={data.site.siteMetadata.title} />
    </StyledLink>
  );
};

export default Logo;
