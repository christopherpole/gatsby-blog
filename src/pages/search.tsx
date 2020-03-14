import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useFlexSearch } from 'react-use-flexsearch';

import ArticlesList from 'src/components/articles/articlesList';

const Wrapper = styled.div``;

interface IProps {
  query: string;
}

const searchQuery = graphql`
  {
    localSearchArticles {
      index
      store
    }
  }
`;

const SearchPage = ({ query }: IProps) => {
  const {
    localSearchArticles: { index, store },
  } = useStaticQuery(searchQuery);
  console.log(index);
  console.log(store);
  const results = useFlexSearch(query, index, JSON.parse(store));

  return (
    <Wrapper>
      <h1>Search</h1>
      <p>{query}</p>

      <ArticlesList articles={results} />
    </Wrapper>
  );
};

export default SearchPage;
