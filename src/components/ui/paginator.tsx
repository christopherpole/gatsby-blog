import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const Wrapper = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
`;

const LinkContainer = styled.li<{ active?: boolean; disabled?: boolean }>`
  list-style-type: none;
  border: 1px solid black;
  width: 4rem;
  height: 4rem;
  margin-right: ${props => props.theme.spacing.small};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  ${props =>
    props.active &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.secondaryFont};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: grey;
      color: ${props.theme.colors.secondaryFont};
      cursor: not-allowed;
    `}

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
    <LinkContainer disabled={!previousPagePath}>
      {!!previousPagePath && (
        <StyledLink to={previousPagePath}>
          <span>L</span>
        </StyledLink>
      )}
      {!previousPagePath && <span>L</span>}
    </LinkContainer>

    {[...Array(numberOfPages)].map((_, i) => (
      <LinkContainer key={`link-container-${i}`} active={pageNumber === i}>
        <StyledLink to={`${baseUrl}/${i === 0 ? '' : i + 1}`}>{i + 1}</StyledLink>
      </LinkContainer>
    ))}

    <LinkContainer disabled={!nextPagePath}>
      {!!nextPagePath && (
        <StyledLink to={nextPagePath}>
          <span>N</span>
        </StyledLink>
      )}
      {!nextPagePath && <span>N</span>}
    </LinkContainer>
  </Wrapper>
);

export default Paginatior;
