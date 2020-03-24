import React from 'react';
import styled from 'styled-components';

import IArticleSummary from 'src/types/articleSummary';
import Article from 'src/components/article';

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.extraLarge};

  &:last-child {
    margin-bottom: 0;
  }
`;

const WrapperInner = styled.ul`
  padding: 0;
  position: relative;
  margin: calc(-${props => props.theme.spacing.large} / 2);

  &:last-child {
    margin: calc(-${props => props.theme.spacing.large} / 2);
  }

  ${props => props.theme.breakpoints.medium`
    display: flex;
    flex-wrap: wrap;
  `}
`;

const ArticlePreviewWrapper = styled.li`
  list-style-type: none;
  padding: calc(${props => props.theme.spacing.large} / 2);

  ${props => props.theme.breakpoints.medium`
    width: 50%;
  `}

  ${props => props.theme.breakpoints.large`
    width: 33.33333%;
  `}
`;

interface IProps {
  articles: IArticleSummary[];
}

const Articles = ({ articles }: IProps) => (
  <Wrapper>
    <WrapperInner>
      {articles.map(article => (
        <ArticlePreviewWrapper key={article.id}>
          <Article {...article} />
        </ArticlePreviewWrapper>
      ))}
    </WrapperInner>
  </Wrapper>
);

export default Articles;
