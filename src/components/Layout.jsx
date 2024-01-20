import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-[#F5F4F6] overflow-hidden">
        <Sidebar/>
       
        <div className="flex-1">
          <Header/>
          <Dashboard/>
        </div>
      </div>
    </>
  );
};

export default Layout;
