import React from "react";
import { Route, Routes } from "react-router-dom";

import NorthIndian from "./NorthIndian";
import ThaiCurry from "./ThaiCurry";
import MilkShake from "./MilkShake";
import Desserts from "./Desserts";
import Beverages from "./Beverages";
import Pasta from './Pasta';


const FatherSubmenu = () => {
  return (
    <>
      <div className="Container">
        <Routes>
          <Route path="/" element={<NorthIndian />} />
          <Route path="/Pasta" element={<Pasta />} />
          <Route path="/Thaicurry" element={<ThaiCurry />} />
          <Route path="/Milkshake" element={<MilkShake />} />
          <Route path="/Desserts" element={<Desserts />} />
          <Route path="/Beverages" element={<Beverages />} />
        </Routes>
      </div>
    </>
  );
};

export default FatherSubmenu;
