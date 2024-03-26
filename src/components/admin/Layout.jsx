import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="block md:flex">
        <div
          className={`transition-width h-0 md:h-[110vh] duration-300${
            isSidebarOpen ? 'w-64' : 'w-0'
          } `}
        >
          <div className=" hidden md:block">
            {' '}
            {isSidebarOpen && <AdminSidebar />}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <AdminNavbar handleToggleSidebar={handleToggleSidebar} />
          <div className="h-full px-3 py-5 ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
