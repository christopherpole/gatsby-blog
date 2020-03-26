import React from 'react';
import styled from 'styled-components';

import Headline from 'src/components/ui/headline';
import Searchbox from 'src/components/searchBox';

const Wrapper = styled.div`
  text-align: center;
`;

const SearchboxWrapper = styled.div`
  width: 30rem;
  display: inline-flex;
`;

const Error404Page = () => (
  <Wrapper>
    <Headline>Page not found :(</Headline>
    <p>Sorry, but the page you were looking for doesn&apos;t exist!</p>
    <SearchboxWrapper>
      <Searchbox />
    </SearchboxWrapper>
  </Wrapper>
);

export default Error404Page;
