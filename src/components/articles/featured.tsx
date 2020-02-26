import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Byline from 'src/components/ui/byline';
import ArticlePreview from 'src/components/ui/articlePreview';

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

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeaturedArticle = () => {
  const {
    allContentfulArticle: { nodes },
  } = useStaticQuery(QUERY);

  const { title, description, image, slug } = nodes[0];

  return (
    <Wrapper>
      <Byline>Featured</Byline>
      <ArticlePreview title={title} description={description} image={image} slug={slug} />
    </Wrapper>
  );
};

export default FeaturedArticle;
