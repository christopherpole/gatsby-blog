import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Link from 'src/components/ui/link';
import ITag from 'src/types/tag';

const QUERY = graphql`
  {
    allContentfulTag(filter: { showInNav: { eq: true } }, sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

const Wrapper = styled.nav`
  margin-right: ${props => props.theme.spacing.large};
`;

const LinksWrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  padding: 0;
`;

const LinkWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.large};

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primary};
  }
`;

const Nav = () => {
  const {
    allContentfulTag: { nodes },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <LinksWrapper>
        {nodes.map(({ id, name, slug }: ITag) => (
          <LinkWrapper key={id}>
            <StyledLink to={`/tag/${slug}`}>{name}</StyledLink>
          </LinkWrapper>
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default Nav;
