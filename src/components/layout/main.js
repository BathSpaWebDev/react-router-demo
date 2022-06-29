import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = ({changeTheme}) => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="page-wrapper">
        <button onClick={changeTheme}>Change theme state</button>
        <Outlet />
      </div>
      

    </>
  )
};

export default Layout;