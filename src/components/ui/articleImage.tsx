import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.em`
  margin-top: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.sizing.small};
`;

interface IProps {
  description?: string;
  fluid: FluidObject | FluidObject[] | undefined;
}

const ArticleImage = ({ fluid, description }: IProps) => (
  <Wrapper>
    <Img fluid={fluid} />
    {description && <Description>{description}</Description>}
  </Wrapper>
);

export default ArticleImage;
