import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import IArticle from 'src/types/article';
import Byline from 'src/components/ui/byline';
import ArticlePreview from 'src/components/ui/articlePreview';

const QUERY = graphql`
  {
    allContentfulArticle(
      filter: { featured: { eq: false } }
      sort: { fields: createdAt, order: DESC }
      limit: 4
    ) {
      nodes {
        id
        title
        description
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        createdAt
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ArticlePreviewsWrapper = styled.ul`
  padding: 0;
  display: flex;
`;

const ArticlePreviewWrapper = styled.li`
  flex: 1;
  margin-right: ${props => props.theme.spacing.medium};
  list-style-type: none;

  &:last-child {
    margin-right: 0;
  }
`;

const LatestArticles = () => {
  const {
    allContentfulArticle: { nodes },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Byline>Random</Byline>
      <ArticlePreviewsWrapper>
        {nodes.map(({ title, description, image, slug, createdAt, body }: IArticle) => (
          <ArticlePreviewWrapper>
            <ArticlePreview
              title={title}
              description={description}
              image={image}
              slug={slug}
              body={body}
              createdAt={createdAt}
            />
          </ArticlePreviewWrapper>
        ))}
      </ArticlePreviewsWrapper>
    </Wrapper>
  );
};

export default LatestArticles;
