module.exports = {
  siteMetadata: {
    title: 'Terrarium Blog',
    description: 'A blog about terrariums',
    author: 'Christopher Pole',
  },
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'fb0igrx2bnzi',
        accessToken: '4DZr_NUV6OkYnxQtzArfWY82T17XBoj1nLVHLk63SfY',
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
  ],
};
