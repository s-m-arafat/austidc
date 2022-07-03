import React from "react";
import { Link } from "react-router-dom";
export default function Sidenav({navs}){
    return(
        <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu menu-vartical shadow bg-base-100 opacity-95 pl-5 pt-10 pr-16 w-fit">
          {navs.map((nav, index) => (
            <Link
              className=" flex items-center justify-start p-2 rounded-md text-lg font-semibold text-green-500 mx-2 tracking-wider"
              to={`/${nav.item.split(" ").join("").toLowerCase()}`}
              key={index}
            >
              {nav.item}
            </Link>
          ))}
          <div className="flex flex-col space-y-3">
          <Link to="/signin">
            <button className="btn btn-outline ">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="btn bg-green-500 text-white">Sign Up</button>
          </Link>
        </div>
        </ul>
      </div>
    );
}