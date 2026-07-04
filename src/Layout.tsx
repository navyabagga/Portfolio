import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
