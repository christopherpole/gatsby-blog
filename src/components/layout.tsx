import React from 'react';
import styled from 'styled-components';

import Footer from 'src/components/footer';
import Header from 'src/components/header';

interface IProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  border: 1px solid green;
  max-width: ${props => props.theme.maxPageWidth};
  margin: auto;
`;

const Content = styled.div`
  border: 1px solid red;
`;

const Layout = ({ children }: IProps) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

export default Layout;
