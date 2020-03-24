import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import { Disqus } from 'gatsby-plugin-disqus';

import IArticleSummary from 'src/types/articleSummary';
import Headline from 'src/components/ui/headline';
import getContentfulRichTextRendererOverrides from 'src/utils/getContentfulRichTextRendererOverrides';
import Articles from 'src/components/articles';
import Share from 'src/components/ui/share';
import Link from 'src/components/ui/link';
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

const StyledHeadline = styled(Headline)`
  margin-bottom: ${props => props.theme.spacing.xxs};
`;

const IntroWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  text-align: center;
`;

const ArticleWrapper = styled.article`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const PublishDate = styled.p`
  margin-bottom: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.sizing.medium};
  color: ${props => props.theme.colors.fonts.tertiary};
`;

const ImageWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const BodyWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const TagsWrapper = styled.p`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Related = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.sizing.extraLarge};
  margin-bottom: ${props => props.theme.spacing.large};
  line-height: 1;
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
    contentfulArticle: { id, title, description, tags, createdAt, body, relatedArticles, image },
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
      <IntroWrapper>
        <StyledHeadline>{title}</StyledHeadline>
        <PublishDate>{createdAt}</PublishDate>
        <Share url={href} title={title} media={(image.fluid as { src: string }).src as string} />
      </IntroWrapper>

      <ImageWrapper>
        <Img fluid={image.fluid} />
      </ImageWrapper>

      <BodyWrapper>
        {documentToReactComponents(body.json, {
          renderNode: getContentfulRichTextRendererOverrides(),
        })}
      </BodyWrapper>

      <TagsWrapper>
        Tags:{' '}
        {tags.map((tag, index) => (
          <React.Fragment key={tag.id}>
            <Link to={`/tag/${tag.slug}`}>{tag.name}</Link>
            {index !== tags.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
      </TagsWrapper>

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
        <Related>Related Articles</Related>
        <Articles articles={relatedArticles} />
      </SuggestedArticlesWrapper>
    )}

    {!relatedArticles && (
      <SuggestedArticlesWrapper>
        <Related>Latest Articles</Related>
        <Articles articles={latestArticles.nodes} />
      </SuggestedArticlesWrapper>
    )}
  </Wrapper>
);

export default ArticlePage;
