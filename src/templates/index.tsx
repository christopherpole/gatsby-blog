import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Paginatior from 'src/components/ui/paginator';
import Headline from 'src/components/ui/headline';
import Article from 'src/components/article';
import Articles from 'src/components/articles';
import IArticleSummary from 'src/types/articleSummary';

export const QUERY = graphql`
  query($limit: Int!, $skip: Int!) {
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
      limit: $limit
      skip: $skip
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        ...articleSummaryFields
      }
    }
  }
`;

const Wrapper = styled.div``;

const HiddenHeadline = styled(Headline)`
  display: none;
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
  pageContext: {
    previousPagePath?: string;
    nextPagePath?: string;
    pageNumber: number;
    numberOfPages: number;
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
  pageContext: { previousPagePath, nextPagePath, pageNumber, numberOfPages },
}: IProps) => (
  <Wrapper>
    <HiddenHeadline>{title}</HiddenHeadline>
    {pageNumber === 0 && <Article spotlight {...featuredArticle.nodes[0]} />}
    <Articles articles={latestArticles.nodes} />

    {numberOfPages > 1 && (
      <Paginatior
        baseUrl="/"
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />
    )}
  </Wrapper>
);

export default IndexPage;
