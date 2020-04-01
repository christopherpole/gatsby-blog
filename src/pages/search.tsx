import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useFlexSearch } from 'react-use-flexsearch';

import SEO from 'src/components/structure/seo';
import Articles from 'src/components/articles';
import SearchBox from 'src/components/searchBox';
import Headline from 'src/components/ui/headline';
import Paginatior from 'src/components/ui/paginator';

const articlesPerPage = 6;

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
  let query;
  let pageNo = 1;

  //  @FIXME For some reason this Reach Router Gatsby is using insists
  //  on giving us our URL param like this. Why no optional params??
  if (props['*'].indexOf('/') > -1) {
    query = props['*'].substring(0, props['*'].indexOf('/'));
    pageNo = parseInt(props['*'].substring(props['*'].indexOf('/') + 1), 10);
  } else {
    query = props['*'];
  }

  const articles = useFlexSearch(query, index, JSON.parse(store));

  return (
    <Wrapper>
      <SEO title="Search" pathname="/search" />

      {/* No query */}
      {!query.length && (
        <>
          <Headline>Search</Headline>

          <NoResultsWrapper>
            <p>Enter your search query below:</p>
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
      {query && articles && articles.length > 0 && (
        <Articles
          articles={articles.slice((pageNo - 1) * articlesPerPage, pageNo * articlesPerPage)}
        />
      )}

      {/* What a mess  */}
      {query && articles && articles.length > articlesPerPage && (
        <Paginatior
          baseUrl={`/search/${query}`}
          pageNumber={pageNo - 1}
          numberOfPages={Math.ceil(articles.length / articlesPerPage)}
          previousPagePath={
            pageNo === 1 ? undefined : `/search/${query}/${pageNo > 2 ? pageNo - 1 : ''}`
          }
          nextPagePath={
            pageNo < Math.ceil(articles.length / articlesPerPage)
              ? `/search/${query}/${pageNo + 1}`
              : undefined
          }
        />
      )}
    </Wrapper>
  );
};

export default SearchPage;
