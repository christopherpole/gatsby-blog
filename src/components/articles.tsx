import React from 'react';
import styled from 'styled-components';

import IArticleSummary from 'src/types/articleSummary';
import Article from 'src/components/article';

const Wrapper = styled.ul`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ArticlesPreviewRow = styled.ul`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: 0;
  display: flex;
  margin-right: calc(-${props => props.theme.spacing.large} / 2);
  margin-left: calc(-${props => props.theme.spacing.large} / 2);

  &:last-child {
    margin-bottom: 0;
  }
`;

const ArticlePreviewWrapper = styled.li`
  list-style-type: none;
  padding: 0 calc(${props => props.theme.spacing.large} / 2);
  width: 33.33333%;

  &:last-child {
    margin-right: 0;
  }
`;

interface IProps {
  articles: IArticleSummary[];
}

const Articles = ({ articles }: IProps) => (
  <Wrapper>
    {[...new Array(Math.ceil(articles.length / 3))].map((_, index: number) => (
      <ArticlesPreviewRow key={index}>
        {articles.slice(index * 3, index * 3 + 3).map(article => (
          <ArticlePreviewWrapper key={article.id}>
            <Article {...article} />
          </ArticlePreviewWrapper>
        ))}
      </ArticlesPreviewRow>
    ))}
  </Wrapper>
);

export default Articles;
