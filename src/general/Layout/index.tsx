import Footer from 'general/Footer';
import Header from 'general/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      <Outlet />

      <div className="h-72" />
      <div className="h-72" />
      <Footer />
    </div>
  );
};

export default Layout;
