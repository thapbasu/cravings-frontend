import React, { Children } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] mx-8 md:mx-20">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
