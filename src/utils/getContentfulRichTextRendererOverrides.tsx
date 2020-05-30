import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Block, Inline } from '@contentful/rich-text-types';
import { RenderNode } from '@contentful/rich-text-react-renderer';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Headline from 'src/components/ui/headline';
import Byline from 'src/components/ui/byline';
import Link from 'src/components/ui/link';
import ArticleImage from 'src/components/ui/articleImage';
import linkStyle from 'src/theme/styles/link';

const StyledOutboundLink = styled(OutboundLink)`
  ${linkStyle}
`;

const query = graphql`
  {
    allContentfulAsset {
      nodes {
        contentful_id
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default (): RenderNode => ({
  'embedded-asset-block': (node: Block | Inline) => {
    const data = useStaticQuery(query);

    //  @REVISE - Is this a bad idea? Why doesn't contentful return the
    //  full image data with the initial query anyway?
    const image = data.allContentfulAsset.nodes.find(
      (imageNode: { contentful_id: string }) =>
        imageNode.contentful_id === node.data.target.sys.contentful_id,
    );

    const description = node.data.target.fields.description
      ? node.data.target.fields.description['en-US']
      : undefined;

    const maxWidth = `${node.data.target.fields.file['en-US'].details.image.width}px`;

    return <ArticleImage maxWidth={maxWidth} fluid={image.fluid} description={description} />;
  },
  'heading-1': (node: Block | Inline) => (
    <Headline>{(node.content[0] as { value: string }).value}</Headline>
  ),
  'heading-2': (node: Block | Inline) => (
    <Byline>{(node.content[0] as { value: string }).value}</Byline>
  ),
  'entry-hyperlink': node => (
    <Link to={`/article/${node.data.target.fields.slug['en-US']}`}>
      {JSON.stringify(node.data.target.fields.title['en-US'])}
    </Link>
  ),
  hyperlink: node => (
    <StyledOutboundLink rel="noopener noreferrer" target="_blank" href={node.data.uri}>
      {(node.content[0] as { value: string }).value}
    </StyledOutboundLink>
  ),
});
