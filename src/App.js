import React from "react";
import "./assets/css/style.css";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Shef from './components/Shef';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Sidebar/>
      <Shef/>
      <Contact />
      
      
      
      {/* <Menu /> */}
      {/* <Review /> */}
      {/* <Blog /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
