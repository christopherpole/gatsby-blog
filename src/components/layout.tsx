import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'normalize.css';

import Footer from 'src/components/footer';
import Header from 'src/components/header';

export const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

interface IProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: ${props => props.theme.maxPageWidth};
  padding: ${props => props.theme.spacing.large};
  flex: 1;
  width: 100%;
`;

const Layout = ({ children }: IProps) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(QUERY);

  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
