import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Byline from 'src/components/ui/byline';
import FeaturedArticle from 'src/components/articles/featured';
import ArticlesList from 'src/components/articles/articlesList';
import IArticle from 'src/types/article';

export const QUERY = graphql`
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

const Wrapper = styled.div``;

const LatestArticlesWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};

  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  data: {
    allContentfulArticle: {
      nodes: IArticle[];
    };
  };
}

const IndexPage = ({
  data: {
    allContentfulArticle: { nodes },
  },
}: IProps) => (
  <Wrapper>
    <FeaturedArticle />

    <LatestArticlesWrapper>
      <Byline>Latest</Byline>
      <ArticlesList articles={nodes} />
    </LatestArticlesWrapper>
  </Wrapper>
);

export default IndexPage;
