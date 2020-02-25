import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import ArticlePreview from '../ui/articlePreview';

const QUERY = graphql`
  {
    allContentfulArticle(
      filter: { featured: { eq: false } }
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

const Wrapper = styled.ul`
  display: flex;
`;

const ArticlePreviewWrapper = styled.li`
  list-style-type: none;
  flex: 1;
`;

const LatestArticles = () => {
  const {
    allContentfulArticle: { nodes },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      {nodes.map(({ title, description, image }) => (
        <ArticlePreviewWrapper>
          <ArticlePreview title={title} description={description} image={image} />
        </ArticlePreviewWrapper>
      ))}
    </Wrapper>
  );
};

export default LatestArticles;
