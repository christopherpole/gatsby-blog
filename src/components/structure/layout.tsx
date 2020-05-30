import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import 'normalize.css';

import Footer from 'src/components/structure/footer';
import Header from 'src/components/structure/header';
import SlidingMenu from 'src/components/structure/slidingMenu';
import CookiesNotification from 'src/components/structure/cookiesNotification';
import SEO from 'src/components/structure/seo';

interface IProps {
  children: React.ReactNode;
}

const HeaderAndContentWrapper = styled.div`
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

const Layout = ({ children }: IProps) => {
  const [slidingMenuState, setSlidingMenuState] = useState<
    'hidden' | 'slidingIn' | 'slidingOut' | 'showing'
  >('hidden');

  return (
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
        {slidingMenuState !== 'hidden' && (
          <SlidingMenu
            setSlidingMenuState={setSlidingMenuState}
            slidingMenuState={slidingMenuState}
          />
        )}
        <HeaderAndContentWrapper>
          <Header
            showSlidingMenu={() => {
              setSlidingMenuState('slidingIn');
            }}
          />
          <ContentWrapper>{children}</ContentWrapper>
        </HeaderAndContentWrapper>
        <Footer />
        <CookiesNotification />
      </Wrapper>
    </>
  );
};

export default Layout;
