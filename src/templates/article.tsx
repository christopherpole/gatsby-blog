import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import { Disqus } from 'gatsby-plugin-disqus';

import IArticleSummary from 'src/types/articleSummary';
import Headline from 'src/components/ui/headline';
import Byline from 'src/components/ui/byline';
import getContentfulRichTextRendererOverrides from 'src/utils/getContentfulRichTextRendererOverrides';
import Articles from 'src/components/articles';
import Share from 'src/components/ui/share';
import SEO from 'src/components/structure/seo';

export const QUERY = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      ...articleSummaryFields
      body {
        json
      }
      relatedArticles {
        ...articleSummaryFields
      }
    }
    latestArticles: allContentfulArticle(
      filter: { slug: { ne: $slug } }
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...articleSummaryFields
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

const BodyWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const SuggestedArticlesWrapper = styled.div``;

interface IFullArticle extends IArticleSummary {
  relatedArticles?: IArticleSummary[];
  body: {
    json: ContentfulDocument;
  };
}

interface IProps {
  data: {
    contentfulArticle: IFullArticle;
    latestArticles: {
      nodes: IFullArticle[];
    };
  };
  location: {
    href: string;
    pathname: string;
  };
}

const ArticlePage = ({
  data: {
    contentfulArticle: { id, title, description, createdAt, body, relatedArticles, image },
    latestArticles,
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
      <Headline>{title}</Headline>
      <PublishDate>{createdAt}</PublishDate>
      <Share url={href} title={title} media={(image.fluid as { src: string }).src as string} />
      <Img fluid={image.fluid} />

      <BodyWrapper>
        {documentToReactComponents(body.json, {
          renderNode: getContentfulRichTextRendererOverrides(),
        })}
      </BodyWrapper>

      <Disqus
        config={{
          url: href,
          identifier: id,
          title,
        }}
      />
    </ArticleWrapper>

    {relatedArticles && relatedArticles.length > 0 && (
      <SuggestedArticlesWrapper>
        <Byline>Related</Byline>
        <Articles articles={relatedArticles} />
      </SuggestedArticlesWrapper>
    )}

    {!relatedArticles && (
      <SuggestedArticlesWrapper>
        <Articles articles={latestArticles.nodes} />
      </SuggestedArticlesWrapper>
    )}
  </Wrapper>
);

export default ArticlePage;
