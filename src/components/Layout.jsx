import React from 'react';
import Navigator from './Navigator';
import FooterMenu from './FooterMenu';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigator darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow pt-5 bg-gradient-to-r from-sky-300 via-sky-500 dark:to-blue-800">
        {children}
      </main>
      <FooterMenu />
    </div>
  );
};

export default Layout;