import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="w-100 overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
