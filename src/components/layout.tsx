import React from 'react';

import Header from './header';
import Footer from './footer';

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
