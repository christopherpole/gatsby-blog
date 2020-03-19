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
    thumbnail: image {
      fluid(maxHeight: 350, maxWidth: 600) {
        ...GatsbyContentfulFluid
      }
    }
    createdAt
  }
`;
