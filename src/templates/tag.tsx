import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Articles from 'src/components/articles';
import Headline from 'src/components/ui/headline';
import IArticleSummary from 'src/types/articleSummary';
import Paginatior from 'src/components/ui/paginator';
import SEO from 'src/components/structure/seo';

export const QUERY = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    contentfulTag(slug: { eq: $slug }) {
      name
    }
    allContentfulArticle(
      limit: $limit
      skip: $skip
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
    contentfulTag: {
      name: string;
    };
    allContentfulArticle: {
      nodes: IArticleSummary[];
    };
  };
  pageContext: {
    slug: string;
    previousPagePath?: string;
    nextPagePath?: string;
    pageNumber: number;
    numberOfPages: number;
  };
  location: {
    pathname: string;
  };
}

const TagPage = ({
  data: {
    contentfulTag: { name },
    allContentfulArticle: { nodes },
  },
  pageContext: { slug, previousPagePath, nextPagePath, pageNumber, numberOfPages },
  location: { pathname },
}: IProps) => (
  <Wrapper>
    <Headline>{name}</Headline>
    <Articles articles={nodes} />
    <SEO title={name} pathname={pathname} />

    {numberOfPages > 1 && (
      <Paginatior
        baseUrl={`tag/${slug}`}
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />
    )}
  </Wrapper>
);

export default TagPage;
