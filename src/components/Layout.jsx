
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Map from "./Map";
import Footer from "./Footer";

const Layout = () => {
  const [map, setMap] = useState(null);
  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-[#F5F4F6] overflow-hidden">
        <Sidebar/>
        <div className="flex-1">
          <Header map={map}/>
          <Dashboard setMap={setMap}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;