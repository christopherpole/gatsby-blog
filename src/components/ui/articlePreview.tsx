import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

import ButtonLink from 'src/components/ui/buttonLink';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  position: relative;
`;

const ImageWrapper = styled.div``;

const ContentWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 50%;
  bottom: 0;
  top: 0;
`;

const ContentWrapperInner = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: ${props => props.theme.spacing.large};
  left: ${props => props.theme.spacing.large};
  right: ${props => props.theme.spacing.large};
  bottom: ${props => props.theme.spacing.large};
  padding: ${props => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CopyWrapper = styled.div``;

const Title = styled.p``;

const Description = styled.p``;

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
    <ContentWrapper>
      <ContentWrapperInner>
        <CopyWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonLink to="#">Read Article</ButtonLink>
        </CopyWrapper>
      </ContentWrapperInner>
    </ContentWrapper>
  </Wrapper>
);

export default ArticlePreview;
