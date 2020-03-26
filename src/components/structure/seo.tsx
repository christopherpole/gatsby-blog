import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
      }
    }
  }
`;

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  twitterUsername?: string;
  isArticle?: boolean;
}

//  @TOOD fix canonical tag
const SEO = (overrides: IProps) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(QUERY);

  const fields = {
    title: overrides.title ? `${overrides.title} - ${siteMetadata.title}` : siteMetadata.title,
    description: overrides.description ? overrides.description : siteMetadata.description,
    image: overrides.image ? overrides.image : siteMetadata.image,
    url: overrides.pathname ? `${siteMetadata.siteUrl}${overrides.pathname}` : siteMetadata.siteUrl,
    twitterUsername: overrides.twitterUsername,
    isArticle: overrides.isArticle,
  };

  fields.url = fields.url.replace('http://', 'https://').replace('www.', '');

  return (
    <Helmet title={fields.title}>
      {fields.description && <meta name="description" content={fields.description} />}
      {fields.image && <meta name="image" content={fields.image} />}
      <link rel="canonical" href={fields.url} />

      {fields.title && <meta property="og:title" content={fields.title} />}
      {fields.description && <meta property="og:description" content={fields.description} />}
      {fields.image && <meta property="og:image" content={fields.image} />}
      {fields.url && <meta property="og:url" content={fields.url} />}
      {fields.isArticle && <meta property="og:type" content="isArticle" />}

      <meta name="twitter:card" content="summary_large_image" />
      {fields.title && <meta name="twitter:title" content={fields.title} />}
      {fields.description && <meta name="twitter:description" content={fields.description} />}
      {fields.image && <meta name="twitter:image" content={fields.image} />}
      {fields.twitterUsername && <meta name="twitter:creator" content={fields.twitterUsername} />}
    </Helmet>
  );
};

export default SEO;
