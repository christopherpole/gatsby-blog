import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Headline from 'src/components/ui/headline';
import IArticle from 'src/types/article';
import ArticlesList from 'src/components/articles/articlesList';

export const QUERY = graphql`
  query($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
    }
    allContentfulArticle(filter: { category: { slug: { eq: $slug } } }) {
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

const Wrapper = styled.div``;

interface IProps {
  data: {
    contentfulCategory: {
      name: string;
    };
    allContentfulArticle: {
      nodes: IArticle[];
    };
  };
}

const CategoryPage = ({
  data: {
    contentfulCategory: { name },
    allContentfulArticle: { nodes },
  },
}: IProps) => (
  <Wrapper>
    <Headline>{name}</Headline>
    <ArticlesList articles={nodes} />
  </Wrapper>
);

export default CategoryPage;
