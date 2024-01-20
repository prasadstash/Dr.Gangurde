import React from 'react'
import '../assets/css/sidebar.css'
import { SidebarData } from './SidebarData'
import FatherSubmenu from './SidebarSubmenu/FatherSubmenu';
import {  Route, Routes, Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <>  
          <div className='SidebarBody'>
              <section>
                  <h1 className='heading'>our <span>MENU</span></h1>
                  
              </section>
  
              <div className='SidebarContainer'>
                  <div className='SidebarChild'>
                      <ul className='SidebarList'>
                      {SidebarData.map((val, key) => {
                          return (
                              <li key={key} >
                                <Link to={val.path}>                                
                                <div className='row'>{val.title}</div>
                                </Link>
                              </li>
                              
                          );
                      })}
                      </ul>
                      
                  </div>
                  <div className='SidebarChild1'>
                      
                      <FatherSubmenu/>
                  </div>
              </div>
          </div>
      </>
    )
  }

export default Sidebar