import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useFlexSearch } from 'react-use-flexsearch';

import HighlightedArticles from 'src/components/articles/highlightedArticles';
import SearchBox from 'src/components/structure/searchBox';

const Wrapper = styled.div``;

interface IProps {
  '*': string;
}

const searchQuery = graphql`
  {
    localSearchArticles {
      index
      store
    }
  }
`;

const SearchPage = (props: IProps) => {
  const {
    localSearchArticles: { index, store },
  } = useStaticQuery(searchQuery);

  //  @FIXME For some reason this Reach Router Gatsby is using insists
  //  on giving us our URL param like this
  //  eslint-disable-next-line react/destructuring-assignment
  const query = props['*'];

  return (
    <Wrapper>
      <h1>Search</h1>

      {!query.length && (
        <>
          <p>Enter your search term below</p>
          <SearchBox />
        </>
      )}

      {query.length > 0 && (
        <>
          <p>{query}</p>
          <HighlightedArticles articles={useFlexSearch(query, index, JSON.parse(store))} />
        </>
      )}
    </Wrapper>
  );
};

export default SearchPage;
