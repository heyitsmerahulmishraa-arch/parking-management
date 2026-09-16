import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import { X } from "lucide-react";

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [sidebarVisible,setSidebarVisible] = useState(false);

  console.log(windowSize);

  return (
    <div className="flex w-screen h-screen relative">
      <div className={`border w-full h-full absolute bg-white ${sidebarVisible ? "block":"hidden"}`}>
        <div className="header flex justify-between">
          <div></div>
          <div><X /></div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div className="border flex-1"></div>
      </div>
    </div>
  );
};

export default Home;
