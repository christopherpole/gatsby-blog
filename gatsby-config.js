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
    url: 'http://localhost:8000',
    siteUrl: 'http://localhost:8000',
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
    'gatsby-plugin-robots-txt',
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
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'terrariumblog',
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
        //  @FIXME: any way to use fragments here?
        query: `
          {
            allContentfulArticle {
              nodes {
                id
                title
                description
                tags {
                  name
                  slug
                }
                body {
                  json
                }
                slug
                thumbnail: image {
                  fluid(maxHeight: 350, maxWidth: 600) {
                    src
                    srcSet
                    sizes
                    base64
                    aspectRatio
                  }
                }
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
        index: ['title', 'description', 'tags', 'content'],
        store: ['id', 'title', 'description', 'tags', 'slug', 'thumbnail', 'image', 'createdAt'],
        normalizer: ({ data }) =>
          data.allContentfulArticle.nodes.map(article => ({
            ...article,
            tags: article.tags.map(tag => tag.name).join(' '),
            content: getContent(article.body.json),
          })),
      },
    },
  ],
};
