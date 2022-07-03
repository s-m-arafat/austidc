import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Navbar({ navs }) {
  return (
    <div className="bg-slate-900 min-w-full">
      <div className="navbar m-auto">
        <div className="navbar-start w-full">
          <div className="h-fit float-left">
            <Link to="/">
              <img
                alt="logo"
                src={logo}
                className="btn btn-ghost normal-case text-xl h-14 md:h-32 pt-2"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-end w-2/5 pr-2">
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              tabIndex="0"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgb(34 197 94)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="hidden  md:flex lg:flex w-max">
            {navs.map((nav, index) => (
              <Link
                className=" flex items-center justify-center p-2 rounded-md text-md font-semibold text-green-500 text-center mx-2 whitespace-nowrap"
                to={`/${nav.item.split(" ").join("").toLowerCase()}`}
                key={index}
              >
                {nav.item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
