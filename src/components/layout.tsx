import React from 'react';

import Footer from 'src/components/footer';
import Header from 'src/components/header';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
