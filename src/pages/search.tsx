import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useFlexSearch } from 'react-use-flexsearch';

import Articles from 'src/components/articles';
import SearchBox from 'src/components/searchBox';
import Headline from 'src/components/ui/headline';

const searchQuery = graphql`
  {
    localSearchArticles {
      index
      store
    }
  }
`;

const Wrapper = styled.div``;

const NoResultsWrapper = styled.div`
  text-align: center;
`;

const SearchBoxWrapper = styled.div`
  width: 30rem;
  display: inline-flex;
`;

interface IProps {
  '*': string;
}

const SearchPage = (props: IProps) => {
  const {
    localSearchArticles: { index, store },
  } = useStaticQuery(searchQuery);

  //  @FIXME For some reason this Reach Router Gatsby is using insists
  //  on giving us our URL param like this
  //  eslint-disable-next-line react/destructuring-assignment
  const query = props['*'];
  const articles = useFlexSearch(query, index, JSON.parse(store));

  return (
    <Wrapper>
      {/* No query */}
      {!query.length && (
        <>
          <Headline>Search</Headline>

          <NoResultsWrapper>
            <p>Enter your search term below</p>
            <SearchBoxWrapper>
              <SearchBox />
            </SearchBoxWrapper>
          </NoResultsWrapper>
        </>
      )}

      {/* Query */}
      {query && <Headline>{`Search results for "${query}"`}</Headline>}

      {/* No articles */}
      {query && articles && articles.length === 0 && (
        <NoResultsWrapper>
          <p>No results found!</p>
          <SearchBoxWrapper>
            <SearchBox />
          </SearchBoxWrapper>
        </NoResultsWrapper>
      )}

      {/* Articles */}
      {query && articles && articles.length > 0 && <Articles articles={articles} />}
    </Wrapper>
  );
};

export default SearchPage;
