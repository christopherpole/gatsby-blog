const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('./src/templates/article.tsx');
  const tagTemplate = path.resolve('./src/templates/tag.tsx');

  const res = await graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            slug
            tags {
              id
            }
          }
        }
      }
      allContentfulTag {
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

  //  Create the tag pages
  res.data.allContentfulTag.edges.forEach(({ node: { id, slug } }) => {
    //  Filter the articles for this tag
    const articles = res.data.allContentfulArticle.edges.filter(
      ({ node }) => !!node.tags.find(tag => tag.id === id),
    );

    paginate({
      createPage,
      items: articles,
      itemsPerPage: 2,
      pathPrefix: `/tag/${slug}`,
      component: tagTemplate,
      context: {
        slug,
      },
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/search/)) {
    //  eslint-disable-next-line no-param-reassign
    page.matchPath = '/search/*';

    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  });
};
