import React from "react";
import "../SidebarSubmenu/SidebarSub.css";
import { Pastaa } from "../../assets/MenuData";

const Pasta = () => {
  return (
    <>
      <div className="Container">
        <div className="Bubble">
          {Pastaa.map((val, key) => {
            console.log(val);
            return (
              <li key={key} className="BubbleList">
                <div className="row">
                  <ul className="nameprice">
                    <div className="name">{val.Name}</div>
                    <div className="price">Price: {val.Price}</div>
                  </ul>
                  <div className="description">{val.Description}</div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pasta;
