import { graphql } from 'gatsby';

export const articleFields = graphql`
  fragment articleFields on ContentfulArticle {
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
`;
