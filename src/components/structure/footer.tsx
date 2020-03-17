import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Link from 'src/components/ui/link';
import Newsletter from 'src/components/structure/newsletter';
import ITag from 'src/types/tag';

const query = graphql`
  {
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
  background-color: ${props => props.theme.colors.secondary};
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

const LinksWrapper = styled.ul`
  padding: 0;
`;

const LinkWrapper = styled.li`
  list-style-type: none;
  margin-bottom: ${props => props.theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
`;

const CopyrightWrapper = styled.div`
  padding: ${props => props.theme.spacing.small};
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  width: 100%;
`;

const Copyright = styled.p`
  font-size: ${props => props.theme.sizing.small};
`;

const Footer = () => {
  const data = useStaticQuery(query);

  return (
    <Wrapper>
      <ContentWrapper>
        <ContentWrapperInner>
          <Column>
            <LinksWrapper>
              <LinkWrapper>
                <Link to="/">Home</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/about">About</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/disclaimer">Affiliate Disclaimer</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/contact">Contact</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/privacy">Privary Policy</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/terms">Terms of Use</Link>
              </LinkWrapper>
            </LinksWrapper>
          </Column>
          <Column>
            Tags:{' '}
            {data.allContentfulTag.nodes.map(({ id, slug, name }: ITag, index: number) => (
              <>
                <Link key={id} to={`/tag/${slug}`}>
                  {name}
                </Link>
                {index < data.allContentfulTag.nodes.length - 1 && `, `}
              </>
            ))}
          </Column>
          <Column>
            We participate in the Amazon Services, LLC Associates program, and affiliate advertising
            program designed to provide a means for us to earn fees by linking to Amazon.com and
            affiliate sites.
          </Column>
          <Column>
            <Newsletter />
          </Column>
        </ContentWrapperInner>
      </ContentWrapper>

      <CopyrightWrapper>
        <Copyright>Copyright</Copyright>
      </CopyrightWrapper>
    </Wrapper>
  );
};

export default Footer;
