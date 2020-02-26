import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

const Logo = () => {
  const data = useStaticQuery(QUERY);

  return <Img fixed={data.image.childImageSharp.fixed} />;
};

export default Logo;
