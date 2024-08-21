import React, { useState } from "react";
import Cursor from "./components/Cursor"
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  const [load,setLoad] = useState(true);

  useEffect(()=>{
    var timer = setTimeout(()=>{
      setLoad(false);
      clearInterval(timer);
    },3400)
  },[])

  return (
      <div className="main cursor-none h-screen w-full text-white bg-zinc-900 box-border m-0 p-0">
      {load ? <Loader/> : 
      <div className="after_loader w-full h-full">
      <Cursor/>
      <NavBar />
      <Work />
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer />
      </div>
      }
    </div>
  );
}

export default App;
