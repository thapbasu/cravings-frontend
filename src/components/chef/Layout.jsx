import React, { useState } from 'react';
import ChefSidebar from './ChefSidebar';
import ChefNavbar from './ChefNavbar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`transition-width h-[110vh] duration-300${
            isSidebarOpen ? 'w-64' : 'w-0'
          } `}
        >
          <div className="hidden md:block">
            {' '}
            {isSidebarOpen && <ChefSidebar />}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <ChefNavbar handleToggleSidebar={handleToggleSidebar} />
          <div className="h-full px-3 py-5 ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
