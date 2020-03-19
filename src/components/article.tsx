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

const ImageWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Title = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.sizing.large};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const TitleAndDescriptionWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const LinkWrapper = styled.div``;

const HighlightedArticle = ({ title, description, thumbnail, slug }: IArticleSummary) => (
  <Wrapper>
    <ImageWrapper>
      <Img fluid={thumbnail.fluid} />
    </ImageWrapper>
    <CopyWrapper>
      <TitleAndDescriptionWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleAndDescriptionWrapper>
      <LinkWrapper>
        <Link to={`/article/${slug}`}>Read more →</Link>
      </LinkWrapper>
    </CopyWrapper>
  </Wrapper>
);

export default HighlightedArticle;
