import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 id='test-manager'>Test Manager</h2>
      <ul className='sidebar-list'>
        { SidebarData.map((val, key) => {
          return (
            <li key={key} 
                className='sidebar-row' 
                id={window.location.pathname === val.link ? 'active' : ''}
                onClick={() => { window.location.pathname = val.link}}>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;