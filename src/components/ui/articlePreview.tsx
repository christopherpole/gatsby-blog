import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import ButtonLink from 'src/components/ui/buttonLink';
import IArticle from 'src/types/article';

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: ${props => props.theme.spacing.large};
`;

const CopyWrapper = styled.div`
  flex: 2;
`;

const Title = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.sizing.large};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const ArticlePreview = ({ title, description, image, slug }: IArticle) => (
  <Wrapper>
    <ImageWrapper>
      <Img fluid={image.fluid} />
    </ImageWrapper>
    <CopyWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonLink to={`article/${slug}`}>Read Article</ButtonLink>
    </CopyWrapper>
  </Wrapper>
);

export default ArticlePreview;
