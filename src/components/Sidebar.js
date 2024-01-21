import React, { useRef } from "react";
import "../assets/css/sidebar.css";
import { SidebarData } from "./SidebarData";
import FatherSubmenu from "./SidebarSubmenu/FatherSubmenu";
import { Route, Routes, Link } from "react-router-dom";

const Sidebar = () => {
  // Create an array of refs, one for each item
  const sidebarRef = SidebarData.map(() => useRef());

  // Function to handle the click event for each item
  const activeHandler = (key) => {
    sidebarRef[index].current.classList.toggle("active");
  };



  
  return (
    <>
      <div id="menu" className="SidebarBody">
        <section>
          <h1 className="heading">
            our <span>MENU</span>
          </h1>
        </section>

        <div className="SidebarContainer">
          <div className="SidebarChild">
            <ul className="SidebarList">
              {SidebarData.map((val, key) => {
                return (
                  <li key={key}>
                    <Link
                      to={val.path}
                      ref={sidebarRef[key]}
                      onClick={() => activeHandler(key)}
                    >
                      <div className="row">{val.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="SidebarChild1">
            <FatherSubmenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
