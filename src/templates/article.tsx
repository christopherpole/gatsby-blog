import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';

import IArticleSummary from 'src/types/articleSummary';
import Headline from 'src/components/ui/headline';
import Byline from 'src/components/ui/byline';
import getContentfulRichTextRendererOverrides from 'src/utils/getContentfulRichTextRendererOverrides';
import ArticlesList from 'src/components/articles/articlesList';
import Share from 'src/components/ui/share';
import SEO from 'src/components/structure/seo';

export const QUERY = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      ...articleSummaryFields
      relatedArticles {
        ...articleSummaryFields
      }
      body {
        json
      }
    }
  }
`;

const Wrapper = styled.div``;

const ArticleWrapper = styled.article`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const PublishDate = styled.p`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const RelatedArticlesWrapper = styled.div``;

interface IFullArticle extends IArticleSummary {
  relatedArticles?: IArticleSummary[];
  body: {
    json: ContentfulDocument;
  };
}

interface IProps {
  data: {
    contentfulArticle: IFullArticle;
  };
  location: {
    href: string;
    pathname: string;
  };
}

const Article = ({
  data: {
    contentfulArticle: { title, description, createdAt, body, relatedArticles, image },
  },
  location: { href, pathname },
}: IProps) => (
  <Wrapper>
    <SEO
      title={title}
      description={description}
      pathname={pathname}
      image={(image.fluid as { src: string }).src as string}
      isArticle
    />

    <ArticleWrapper>
      <Share url={href} title={title} media={(image.fluid as { src: string }).src as string} />
      <Headline>{title}</Headline>
      <PublishDate>{createdAt}</PublishDate>
      <Img fluid={image.fluid} />
      {documentToReactComponents(body.json, {
        renderNode: getContentfulRichTextRendererOverrides(),
      })}
    </ArticleWrapper>

    {relatedArticles && relatedArticles.length > 0 && (
      <RelatedArticlesWrapper>
        <Byline>Related</Byline>
        <ArticlesList articles={relatedArticles} />
      </RelatedArticlesWrapper>
    )}
  </Wrapper>
);

export default Article;
