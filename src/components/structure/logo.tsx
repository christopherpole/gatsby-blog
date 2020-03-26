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
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
`;

const StyledImg = styled(Img)``;

const Logo = () => {
  const data = useStaticQuery(QUERY);

  return (
    <StyledLink to="/">
      <StyledImg fixed={data.image.childImageSharp.fixed} alt={data.site.siteMetadata.title} />
    </StyledLink>
  );
};

export default Logo;
