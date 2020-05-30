import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

const Wrapper = styled.div<{ maxWidth: string }>`
  margin-bottom: ${props => props.theme.spacing.medium};
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.maxWidth};

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledImg = styled(Img)``;

const Description = styled.p`
  text-align: center;
  background: #eee;
  font-size: ${props => props.theme.sizing.small};
  padding: ${props => props.theme.spacing.extraSmall};
`;

interface IProps {
  description?: string;
  fluid: FluidObject | FluidObject[] | undefined;
  maxWidth: string;
}

const ArticleImage = ({ fluid, description, maxWidth }: IProps) => (
  <Wrapper maxWidth={maxWidth}>
    <StyledImg fluid={fluid} />
    {description && <Description>{description}</Description>}
  </Wrapper>
);

export default ArticleImage;
