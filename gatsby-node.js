const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('./src/templates/article.tsx');

  const res = await graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulArticle.edges.forEach(({ node: { slug } }) => {
    createPage({
      component: articleTemplate,
      path: slug,
      context: {
        slug,
      },
    });
  });
};
