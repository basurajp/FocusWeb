import React from "react";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquies from "./components/Marquies";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquies />
      <Cards />
      <Footer/>
      
    </div>
  );
};

export default App;
