import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Headline from 'src/components/ui/headline';
import IArticleSummary from 'src/types/articleSummary';
import ArticlesList from 'src/components/articles/articlesList';
import Paginatior from 'src/components/ui/paginator';

export const QUERY = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
    }
    allContentfulArticle(
      limit: $limit
      skip: $skip
      filter: { category: { slug: { eq: $slug } } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        ...articleSummaryFields
      }
    }
  }
`;

const Wrapper = styled.div``;

interface IProps {
  data: {
    contentfulCategory: {
      name: string;
    };
    allContentfulArticle: {
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

const CategoryPage = ({
  data: {
    contentfulCategory: { name },
    allContentfulArticle: { nodes },
  },
  pageContext: { previousPagePath, nextPagePath, pageNumber, numberOfPages },
}: IProps) => (
  <Wrapper>
    <Headline>{name}</Headline>
    <ArticlesList articles={nodes} />

    {numberOfPages > 1 && (
      <Paginatior
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />
    )}
  </Wrapper>
);

export default CategoryPage;
