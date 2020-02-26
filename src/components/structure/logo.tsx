import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export const QUERY = graphql`
  query {
    image: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
`;

const Logo = () => {
  const data = useStaticQuery(QUERY);

  return (
    <StyledLink to="/">
      <Img fixed={data.image.childImageSharp.fixed} />
    </StyledLink>
  );
};

export default Logo;
