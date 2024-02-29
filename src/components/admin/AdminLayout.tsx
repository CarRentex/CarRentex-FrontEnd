import React from 'react';
import AdminAsideBar from './SideBar/Sidebar';
import AdminNavbar from './Navbar/AdminNavbar';
import './AdminLayout.css';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <AdminAsideBar />
      <div className='content'>
        {/* <AdminNavbar /> */}
        <main className='main-content'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
