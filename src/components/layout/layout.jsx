  import React from 'react';
  import './layout.scss';
  import Sidebar from '../sidebar/sidebar';
  import { Outlet } from 'react-router-dom';
  import Home from '../home/home';
  function Layout() {

    return (
      <div className='App'>
        <Sidebar />
        <div className='page'>
              <Outlet /> {/* Render nested routes if using react-router */}             
        </div>
      </div>
    );
  }

  export default Layout;
