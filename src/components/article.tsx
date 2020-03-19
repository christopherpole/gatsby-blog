import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Link from 'src/components/ui/link';
import IArticleSummary from 'src/types/articleSummary';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageWrapper = styled(Link)`
  display: block;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Title = styled(Link)`
  margin-bottom: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.sizing.large};
  line-height: 1.3;
  font-weight: bold;

  &,
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.fonts.primary};
  }
`;

const PublishedOn = styled.p`
  font-size: ${props => props.theme.sizing.small};
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.fonts.tertiary};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const TitleAndDescriptionWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const LinkWrapper = styled.div``;

const HighlightedArticle = ({
  title,
  description,
  thumbnail,
  slug,
  createdAt,
}: IArticleSummary) => (
  <Wrapper>
    <ImageWrapper to={`/article/${slug}`}>
      <Img fluid={thumbnail.fluid} />
    </ImageWrapper>
    <CopyWrapper>
      <TitleAndDescriptionWrapper>
        <Title to={`/article/${slug}`}>{title}</Title>
        <PublishedOn>{createdAt}</PublishedOn>
        <Description>{description}</Description>
      </TitleAndDescriptionWrapper>
      <LinkWrapper>
        <Link to={`/article/${slug}`}>Read more →</Link>
      </LinkWrapper>
    </CopyWrapper>
  </Wrapper>
);

export default HighlightedArticle;
