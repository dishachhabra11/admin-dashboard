
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Map from "./Map";

const Layout = () => {
  const [map, setMap] = useState(null);
  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-[#141b2d] overflow-hidden">
        <Sidebar/>
        
       
        <div className="flex-1">
          <Header map={map}/>
          <Dashboard setMap={setMap}/>
        </div>
      </div>
    </>
  );
};

export default Layout;