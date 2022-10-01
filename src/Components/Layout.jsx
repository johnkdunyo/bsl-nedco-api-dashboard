import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-64 h-screen">
        <div className="flex h-screen flex-col justify-start">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
