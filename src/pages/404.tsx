import React from 'react';
import styled from 'styled-components';

import SEO from 'src/components/structure/seo';
import Headline from 'src/components/ui/headline';
import Searchbox from 'src/components/searchBox';

const Wrapper = styled.div`
  text-align: center;
`;

const SearchboxWrapper = styled.div`
  width: 30rem;
  display: inline-flex;
`;

interface IProps {
  location: {
    pathname: string;
  };
}

const Error404Page = ({ location: { pathname } }: IProps) => (
  <Wrapper>
    <SEO title="Page not found" pathname={pathname} />

    <Headline>Page not found :(</Headline>
    <p>Sorry, but the page you were looking for doesn&apos;t exist!</p>
    <SearchboxWrapper>
      <Searchbox />
    </SearchboxWrapper>
  </Wrapper>
);

export default Error404Page;
