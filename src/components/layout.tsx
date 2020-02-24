import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import Footer from 'src/components/footer';
import Header from 'src/components/header';

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
  background: blue;
  width: 100%;
`;

const Layout = ({ children }: IProps) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

export default Layout;
