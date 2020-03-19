import React from 'react';
import styled from 'styled-components';

import IArticleSummary from 'src/types/articleSummary';
import HighlightedArticle from 'src/components/articles/highlightedArticle';

const Wrapper = styled.ul`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: 0;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ArticlePreviewWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.large};
  flex: 1;

  &:last-child {
    margin-right: 0;
  }
`;

interface IProps {
  articles: IArticleSummary[];
}

const HighlightedArticles = ({ articles }: IProps) => (
  <Wrapper>
    {articles.map(article => (
      <ArticlePreviewWrapper key={article.id}>
        <HighlightedArticle {...article} />
      </ArticlePreviewWrapper>
    ))}
  </Wrapper>
);

export default HighlightedArticles;
