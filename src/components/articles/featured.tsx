import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ArticlePreview from '../ui/articlePreview';

const QUERY = graphql`
  {
    allContentfulArticle(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        description
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        createdAt
      }
    }
  }
`;

const FeaturedArticle = () => {
  const {
    allContentfulArticle: { nodes },
  } = useStaticQuery(QUERY);

  const { title, description, image } = nodes[0];

  return <ArticlePreview title={title} description={description} image={image} />;
};

export default FeaturedArticle;
