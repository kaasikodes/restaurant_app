import Header from 'general/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="h-72" />
      <Outlet />

      <div className="h-72" />
      <div className="h-72" />
    </div>
  );
};

export default Layout;
