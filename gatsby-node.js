const path = require('path');

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
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
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
  res.data.allContentfulCategory.edges.forEach(({ node: { slug } }) => {
    createPage({
      component: categoryTemplate,
      path: `/category/${slug}`,
      context: {
        slug,
      },
    });
  });
};
