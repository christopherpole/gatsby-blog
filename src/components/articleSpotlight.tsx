import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import IArticleSummary from 'src/types/articleSummary';
import buttonStyles from 'src/theme/styles/button';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.large};
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
  max-width: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: ${props => props.theme.spacing.extraLarge};
  color: white;
`;

const Title = styled.h3`
  line-height: 1.2;
  margin-bottom: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.sizing.xxl};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.large};
`;

const StyledLink = styled(Link)`
  ${buttonStyles};
  border: 2px solid white;
  background-color: transparent;

  &:hover,
  &:focus {
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
        <StyledLink to={`/article/${slug}`}>Read More</StyledLink>
      </CopyWrapperInner>
    </CopyWrapper>
  </Wrapper>
);

export default ArticleSpotlight;
