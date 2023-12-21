import React from "react";
import { Outlet, NavLink } from "react-router-dom";
// import BreadCrumbs from '../components/BreadCrumbs'
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default RootLayout;
