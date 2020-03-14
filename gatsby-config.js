require('dotenv').config({
  path: '.env',
});

const getContent = input => {
  if (input instanceof Array) {
    return input.map(e => getContent(e)).join(' ');
  }

  if (input.content) {
    return input.content.map(e => getContent(e)).join(' ');
  }

  if (input.value) {
    return input.value;
  }

  return '';
};

module.exports = {
  siteMetadata: {
    title: 'Terrarium Blog',
    description: 'A blog about terrariums',
    author: 'Christopher Pole',
    url: 'google.com',
    image: 'https://placehold.it/200x200',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        siteSpeedSampleRate: 10,
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-recaptcha',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'fb0igrx2bnzi',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Terrarium Blog',
        short_name: 'Terrarium Blogs',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'articles',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          query {
            allContentfulArticle {
              nodes {
                id
                title
                description
                category {
                  name
                  slug
                }
                body {
                  json
                }
                slug
                image {
                  fluid {
                    src
                    srcSet
                    sizes
                    base64
                    aspectRatio
                  }
                }
                createdAt
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'description', 'category_name', 'content'],
        store: ['id', 'title', 'description', 'category', 'slug', 'image', 'createdAt'],
        normalizer: ({ data }) =>
          data.allContentfulArticle.nodes.map(article => ({
            ...article,
            category_name: article.category.name,
            content: getContent(article.body.json),
          })),
      },
    },
  ],
};
