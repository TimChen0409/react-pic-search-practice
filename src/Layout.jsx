import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
