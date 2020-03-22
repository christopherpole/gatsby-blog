import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useFlexSearch } from 'react-use-flexsearch';

import Articles from 'src/components/articles';
import SearchBox from 'src/components/structure/searchBox';
import Headline from 'src/components/ui/headline';

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
      {query && <Headline>{`Search results for "${query}"`}</Headline>}
      {!query && <Headline>Search</Headline>}

      {!query.length && (
        <>
          <p>Enter your search term below</p>
          <SearchBox />
        </>
      )}
      {query.length > 0 && (
        <>
          <p>{query}</p>
          <Articles articles={useFlexSearch(query, index, JSON.parse(store))} />
        </>
      )}
    </Wrapper>
  );
};

export default SearchPage;
