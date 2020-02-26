import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import IArticle from 'src/types/article';
import Byline from 'src/components/ui/byline';
import ArticlePreview from 'src/components/ui/articlePreview';

const QUERY = graphql`
  {
    allContentfulArticle(
      filter: { featured: { eq: false } }
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
      nodes {
        id
        title
        description
        category {
          name
          slug
        }
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

const ArticlePreviewsWrapper = styled.ul`
  padding: 0;
`;

const ArticlePreviewWrapper = styled.li`
  margin-bottom: ${props => props.theme.spacing.medium};
  list-style-type: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LatestArticles = () => {
  const {
    allContentfulArticle: { nodes },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Byline>Latest</Byline>
      <ArticlePreviewsWrapper>
        {nodes.map((node: IArticle) => (
          <ArticlePreviewWrapper>
            <ArticlePreview {...(node as IArticle)} />
          </ArticlePreviewWrapper>
        ))}
      </ArticlePreviewsWrapper>
    </Wrapper>
  );
};

export default LatestArticles;
