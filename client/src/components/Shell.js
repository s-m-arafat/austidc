import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidenav from "./Navbar/Sidenav";

export default function Shell({navs, children}) {
  return (
    <div className="drawer dark:bg-slate-100 min-w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white">
        <Navbar navs={navs} />
        {children}
        {/* <Footer/> */}
      </div>
      <Sidenav navs={navs} />
    </div>
  );
}
