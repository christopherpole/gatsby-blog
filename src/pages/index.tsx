import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Headline from 'src/components/ui/headline';
import ArticleSpotlight from 'src/components/articles/articleSpotlight';
import ArticlesList from 'src/components/articles/articlesList';
import HighlightedArticles from 'src/components/articles/highlightedArticles';
import IArticleSummary from 'src/types/articleSummary';
import Byline from 'src/components/ui/byline';

export const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    featuredArticle: allContentfulArticle(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: DESC }
      limit: 1
    ) {
      nodes {
        ...articleSummaryFields
      }
    }
    latestArticles: allContentfulArticle(
      filter: { featured: { eq: false } }
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
      nodes {
        ...articleSummaryFields
      }
    }
  }
`;

const Wrapper = styled.div``;

const StyledByline = styled(Byline)`
  text-align: center;
`;

const HiddenHeadline = styled(Headline)`
  display: none;
`;

const ArticlesWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};

  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    featuredArticle: {
      nodes: IArticleSummary[];
    };
    latestArticles: {
      nodes: IArticleSummary[];
    };
  };
}

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    featuredArticle,
    latestArticles,
  },
}: IProps) => (
  <Wrapper>
    <HiddenHeadline>{title}</HiddenHeadline>

    <ArticlesWrapper>
      <ArticleSpotlight {...featuredArticle.nodes[0]} />
    </ArticlesWrapper>

    <ArticlesWrapper>
      <StyledByline>Popular</StyledByline>
      <HighlightedArticles articles={latestArticles.nodes.slice(0, 3)} />
    </ArticlesWrapper>

    <ArticlesWrapper>
      <Byline>Latest</Byline>
      <ArticlesList articles={latestArticles.nodes} />
    </ArticlesWrapper>
  </Wrapper>
);

export default IndexPage;
