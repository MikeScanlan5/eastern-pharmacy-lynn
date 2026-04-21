import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}