import React from 'react';
import styled, { css } from 'styled-components';

import ButtonLink from 'src/components/ui/buttonLink';

const Wrapper = styled.ul`
  padding: 0;
  display: flex;
  font-weight: bold;
  justify-content: center;
`;

const LinkContainer = styled.li`
  list-style-type: none;
  width: 4rem;
  height: 4rem;
  margin-right: ${props => props.theme.spacing.small};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(({ isActive, ...rest }) => <ButtonLink {...rest} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition-property: background-color color;
  color: ${props => props.theme.colors.fonts.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.fonts.secondary};
    background: ${props => props.theme.colors.primary};
  }

  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.colors.disabled};
    `}

  ${props =>
    props.isActive &&
    css`
      color: white;
      background: ${props.theme.colors.primary};
    `}
`;

interface IProps {
  baseUrl: string;
  pageNumber: number;
  numberOfPages: number;
  previousPagePath?: string;
  nextPagePath?: string;
}

const Paginatior = ({
  baseUrl,
  previousPagePath,
  nextPagePath,
  numberOfPages,
  pageNumber,
}: IProps) => (
  <Wrapper>
    <LinkContainer>
      <StyledLink disabled={!previousPagePath} to={baseUrl}>
        &lt;&lt;
      </StyledLink>
    </LinkContainer>

    <LinkContainer>
      <StyledLink disabled={!previousPagePath} to={previousPagePath || baseUrl}>
        &lt;
      </StyledLink>
    </LinkContainer>

    {[...Array(numberOfPages)].map((_, i) => (
      <LinkContainer key={`link-container-${i}`}>
        <StyledLink isActive={pageNumber === i} to={`${baseUrl}/${i === 0 ? '' : i + 1}`}>
          {`${i + 1}`}
        </StyledLink>
      </LinkContainer>
    ))}

    <LinkContainer>
      <StyledLink disabled={!nextPagePath} to={nextPagePath || baseUrl}>
        &gt;
      </StyledLink>
    </LinkContainer>

    <LinkContainer>
      <StyledLink disabled={!nextPagePath} to={`${baseUrl}/${numberOfPages}`}>
        &gt;&gt;
      </StyledLink>
    </LinkContainer>
  </Wrapper>
);

export default Paginatior;
