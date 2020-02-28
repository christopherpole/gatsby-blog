import React from 'react';
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

export default (): RenderNode => ({
  'embedded-asset-block': (node: Block | Inline) => {
    const src = node.data.target.fields.file['en-US'].url;
    const alt = node.data.target.fields.title['en-US'];
    const description =
      node.data.target.fields.description && node.data.target.fields.description['en-US'];
    const { width, height } = node.data.target.fields.file['en-US'].details.image;

    return (
      <ArticleImage src={src} alt={alt} width={width} height={height} description={description} />
    );
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
