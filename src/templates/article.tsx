import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import IArticle from 'src/types/article';
import Headline from 'src/components/ui/headline';
import getContentfulRichTextRendererOverrides from 'src/utils/getContentfulRichTextRendererOverrides';

export const QUERY = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      id
      title
      createdAt(formatString: "dddd Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Wrapper = styled.article``;

const PublishDate = styled.p`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

interface IProps {
  data: {
    contentfulArticle: IArticle;
  };
}

const Article = ({
  data: {
    contentfulArticle: { title, createdAt, body },
  },
}: IProps) => (
  <Wrapper>
    <Headline>{title}</Headline>
    <PublishDate>{createdAt}</PublishDate>
    {documentToReactComponents(body.json, {
      renderNode: getContentfulRichTextRendererOverrides(),
    })}
  </Wrapper>
);

export default Article;
