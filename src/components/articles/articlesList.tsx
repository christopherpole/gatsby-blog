import React from 'react';
import styled from 'styled-components';

import IArticleSummary from 'src/types/articleSummary';
import ArticlePreview from 'src/components/articles/articlePreview';

const Wrapper = styled.ul`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ArticlePreviewWrapper = styled.li`
  margin-bottom: ${props => props.theme.spacing.medium};
  list-style-type: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  articles: IArticleSummary[];
}

const ArticlesList = ({ articles }: IProps) => (
  <Wrapper>
    {articles.map(article => (
      <ArticlePreviewWrapper key={article.id}>
        <ArticlePreview {...article} />
      </ArticlePreviewWrapper>
    ))}
  </Wrapper>
);

export default ArticlesList;
