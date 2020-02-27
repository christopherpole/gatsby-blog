import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Link from 'src/components/ui/link';
import ICategory from 'src/types/category';

const QUERY = graphql`
  {
    allContentfulCategory(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

const Wrapper = styled.ul`
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

const Nav = () => {
  const {
    allContentfulCategory: { nodes },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      {nodes.map(({ id, name, slug }: ICategory) => (
        <LinkWrapper key={id}>
          <Link to={`/category/${slug}`}>{name}</Link>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};

export default Nav;
