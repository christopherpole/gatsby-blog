import { graphql } from 'gatsby';

export const articleFields = graphql`
  fragment articleSummaryFields on ContentfulArticle {
    id
    title
    description
    tags {
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
