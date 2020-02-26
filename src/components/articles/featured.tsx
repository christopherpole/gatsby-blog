import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Byline from 'src/components/ui/byline';
import ArticlePreview from 'src/components/ui/articlePreview';
import IArticle from 'src/types/article';

const QUERY = graphql`
  {
    allContentfulArticle(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        description
        category {
          name
          slug
        }
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

const FeaturedArticle = () => {
  const {
    allContentfulArticle: { nodes },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Byline>Featured</Byline>
      <ArticlePreview {...(nodes[0] as IArticle)} />
    </Wrapper>
  );
};

export default FeaturedArticle;
