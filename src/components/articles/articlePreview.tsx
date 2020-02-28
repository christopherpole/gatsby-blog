import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import ButtonLink from 'src/components/ui/buttonLink';
import Link from 'src/components/ui/link';
import IArticleSummary from 'src/types/articleSummary';

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: ${props => props.theme.spacing.medium};
`;

const CopyWrapper = styled.div`
  flex: 2;
`;

const StyledLink = styled(Link)`
  color: inherit;
  display: block;
  margin-bottom: ${props => props.theme.spacing.small};
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primary};
  }
`;

const Title = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.sizing.large};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const ArticlePreview = ({ title, description, category, image, slug }: IArticleSummary) => (
  <Wrapper>
    <ImageWrapper>
      <Img fluid={image.fluid} />
    </ImageWrapper>
    <CopyWrapper>
      <StyledLink to={`/category/${category.slug}`}>{category.name}</StyledLink>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonLink to={`/article/${slug}`}>Read Article</ButtonLink>
    </CopyWrapper>
  </Wrapper>
);

export default ArticlePreview;
