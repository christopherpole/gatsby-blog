import React from 'react';
import styled from 'styled-components';

import FeaturedArticle from 'src/components/articles/featured';
import LatestArticles from 'src/components/articles/latest';

const Wrapper = styled.div``;

const IndexPage = () => (
  <Wrapper>
    <FeaturedArticle />
    <LatestArticles />
  </Wrapper>
);

export default IndexPage;
