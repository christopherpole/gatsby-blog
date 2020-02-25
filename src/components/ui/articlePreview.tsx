import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

import ButtonLink from 'src/components/ui/buttonLink';

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

interface IProps {
  title: string;
  description: string;
  image: {
    fluid?: FluidObject | FluidObject[];
  };
}

const ArticlePreview = ({ title, description, image }: IProps) => (
  <Wrapper>
    <ImageWrapper>
      <Img fluid={image.fluid} />
    </ImageWrapper>
    <CopyWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonLink to="#">Read Article</ButtonLink>
    </CopyWrapper>
  </Wrapper>
);

export default ArticlePreview;
