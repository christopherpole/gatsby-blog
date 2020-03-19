import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import ButtonLink from 'src/components/ui/buttonLink';
import IArticleSummary from 'src/types/articleSummary';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
`;

const ImageWrapper = styled.div``;

const CopyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyWrapperInner = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: ${props => props.theme.spacing.large};
  color: white;
`;

const Title = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.sizing.large};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const StyledButtonLink = styled(ButtonLink)`
  border: 2px solid white;
  background-color: transparent;

  &:hover,
  &:active {
    background-color: white;
    color: black;
  }
`;

const ArticleSpotlight = ({ title, description, image, slug }: IArticleSummary) => (
  <Wrapper>
    <ImageWrapper>
      <Img fluid={image.fluid} />
    </ImageWrapper>

    <CopyWrapper>
      <CopyWrapperInner>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StyledButtonLink to={`/article/${slug}`}>Read Article</StyledButtonLink>
      </CopyWrapperInner>
    </CopyWrapper>
  </Wrapper>
);

export default ArticleSpotlight;
