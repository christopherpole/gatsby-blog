import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};

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
}

const ArticleImage = ({ fluid, description }: IProps) => (
  <Wrapper>
    <StyledImg fluid={fluid} />
    {description && <Description>{description}</Description>}
  </Wrapper>
);

export default ArticleImage;
