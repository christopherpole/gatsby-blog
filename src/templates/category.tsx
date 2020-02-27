import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Headline from 'src/components/ui/headline';
import IArticleSummary from 'src/types/articleSummary';
import ArticlesList from 'src/components/articles/articlesList';

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
    previousPagePath: string;
    nextPagePath: string;
  };
}

const CategoryPage = ({
  data: {
    contentfulCategory: { name },
    allContentfulArticle: { nodes },
  },
  pageContext: { previousPagePath, nextPagePath },
}: IProps) => (
  <Wrapper>
    <Headline>{name}</Headline>
    <ArticlesList articles={nodes} />

    {previousPagePath && <Link to={previousPagePath}>Previous page</Link>}
    {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
  </Wrapper>
);

export default CategoryPage;
