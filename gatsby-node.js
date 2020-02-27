const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('./src/templates/article.tsx');
  const categoryTemplate = path.resolve('./src/templates/category.tsx');

  const res = await graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            slug
            category {
              id
            }
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  //  Create the article pages
  res.data.allContentfulArticle.edges.forEach(({ node: { slug } }) => {
    createPage({
      component: articleTemplate,
      path: `/article/${slug}`,
      context: {
        slug,
      },
    });
  });

  //  Create the category pages
  res.data.allContentfulCategory.edges.forEach(({ node: { id, slug } }) => {
    //  Filter the articles for this category
    const articles = res.data.allContentfulArticle.edges.filter(
      ({ node }) => node.category.id === id,
    );

    paginate({
      createPage,
      items: articles,
      itemsPerPage: 2,
      pathPrefix: `/category/${slug}`,
      component: categoryTemplate,
      context: {
        slug,
      },
    });
  });
};
