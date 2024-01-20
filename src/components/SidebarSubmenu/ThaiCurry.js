import React from "react";
import { ThaiCurryy } from "../../assets/MenuData";
import "../SidebarSubmenu/SidebarSub.css";

const ThaiCurry = () => {
  return (
    <>
      <div className="Container">
        <div className="Bubble">
          {ThaiCurryy.map((val, key) => {
            console.log(val);
            return (
              <li key={key} className="BubbleList">
                <div className="row">
                {/* <img src={require("../../../src/assets/images/cart-item-3.png")} style={{ width: 200, height: 200 }} /> */}
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

export default ThaiCurry;
