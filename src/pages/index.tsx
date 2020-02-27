import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Byline from 'src/components/ui/byline';
import ArticlesList from 'src/components/articles/articlesList';
import IArticle from 'src/types/article';

export const QUERY = graphql`
  {
    latestArticles: allContentfulArticle(
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
    featuredArticle: allContentfulArticle(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: DESC }
      limit: 1
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

const Wrapper = styled.div``;

const ArticlesWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};

  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  data: {
    featuredArticle: {
      nodes: IArticle[];
    };
    latestArticles: {
      nodes: IArticle[];
    };
  };
}

const IndexPage = ({ data: { featuredArticle, latestArticles } }: IProps) => (
  <Wrapper>
    <ArticlesWrapper>
      <Byline>Featured</Byline>
      <ArticlesList articles={[featuredArticle.nodes[0]]} />
    </ArticlesWrapper>

    <ArticlesWrapper>
      <Byline>Latest</Byline>
      <ArticlesList articles={latestArticles.nodes} />
    </ArticlesWrapper>
  </Wrapper>
);

export default IndexPage;
