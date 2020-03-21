import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Link from 'src/components/ui/link';
import Newsletter from 'src/components/structure/newsletter';
import ITag from 'src/types/tag';

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulTag {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

const Wrapper = styled.footer`
  width: 100%;
`;

const ContentWrapper = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  font-size: ${props => props.theme.sizing.small};
  color: ${props => props.theme.colors.fonts.secondary};
  padding: ${props => props.theme.spacing.large};
`;

const ContentWrapperInner = styled.div`
  max-width: ${props => props.theme.maxPageWidth};
  margin: auto;
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  margin-right: ${props => props.theme.spacing.large};

  &:last-child {
    margin-right: 0;
  }
`;

const ColumnHeader = styled.h4`
  font-size: ${props => props.theme.sizing.medium};
  margin-bottom: ${props => props.theme.spacing.medium};

  &:after {
    content: '';
    margin-top: ${props => props.theme.spacing.extraSmall};
    display: block;
    background: white;
    width: 40%;
    height: 0.2rem;
  }
`;

const LinksWrapper = styled.ul`
  padding: 0;
`;

const LinkWrapper = styled.li`
  list-style-type: none;
  margin-bottom: ${props => props.theme.spacing.extraSmall};

  &:last-child {
    margin-bottom: 0;
  }
`;

const CopyrightWrapper = styled.div`
  padding: ${props => props.theme.spacing.medium};
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.fonts.secondary};
  width: 100%;
`;

const Copyright = styled.p`
  line-height: 1;
  font-size: ${props => props.theme.sizing.small};
`;

const Footer = () => {
  const data = useStaticQuery(query);

  return (
    <Wrapper>
      <ContentWrapper>
        <ContentWrapperInner>
          <Column>
            <ColumnHeader>Links</ColumnHeader>
            <LinksWrapper>
              <LinkWrapper>
                <Link altStyle to="/">
                  Home
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link altStyle to="/about">
                  About
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link altStyle to="/disclaimer">
                  Affiliate Disclaimer
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link altStyle to="/contact">
                  Contact
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link altStyle to="/privacy">
                  Privary Policy
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link altStyle to="/terms">
                  Terms of Use
                </Link>
              </LinkWrapper>
            </LinksWrapper>
          </Column>
          <Column>
            <ColumnHeader>Tags</ColumnHeader>
            {data.allContentfulTag.nodes.map(({ id, slug, name }: ITag, index: number) => (
              <React.Fragment key={id}>
                <Link altStyle key={id} to={`/tag/${slug}`}>
                  {name}
                </Link>
                {index < data.allContentfulTag.nodes.length - 1 && ` | `}
              </React.Fragment>
            ))}
          </Column>
          <Column>
            <ColumnHeader>Newsletter</ColumnHeader>
            <Newsletter />
          </Column>
        </ContentWrapperInner>
      </ContentWrapper>

      <CopyrightWrapper>
        <Copyright>
          &copy; {new Date().getFullYear()}, {data.site.siteMetadata.title}
        </Copyright>
      </CopyrightWrapper>
    </Wrapper>
  );
};

export default Footer;
