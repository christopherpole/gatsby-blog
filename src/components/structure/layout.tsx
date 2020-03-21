import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import 'normalize.css';

import Footer from 'src/components/structure/footer';
import Header from 'src/components/structure/header';
import SEO from 'src/components/structure/seo';

interface IProps {
  children: React.ReactNode;
}

const HeaderAndContentWrapper = styled.div`
  /* padding: 0 ${props => props.theme.spacing.large}; */
  flex: 1;
  width: 100%;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.main`
  flex: 3;
  width: 100%;
  margin: auto;
  padding: ${props => props.theme.spacing.large};
  max-width: ${props => props.theme.maxPageWidth};
`;

const Layout = ({ children }: IProps) => (
  <>
    <Helmet>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <SEO />

    <Wrapper>
      <HeaderAndContentWrapper>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </HeaderAndContentWrapper>
      <Footer />
    </Wrapper>
  </>
);

export default Layout;
