import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const Description = styled.em`
  font-size: ${props => props.theme.sizing.small};
`;

interface IProps {
  src: string;
  alt: string;
  description?: string;
  height: number;
  width: number;
}

const ArticleImage = ({ src, alt, description, height, width }: IProps) => (
  <Wrapper>
    <ImageWrapper>
      <img src={src} alt={alt} width={width} height={height} />
    </ImageWrapper>
    <Description>{description}</Description>
  </Wrapper>
);

export default ArticleImage;
