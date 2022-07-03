import React from "react";

import Shell from "./Shell";
import Slide from "./Slide";

export default function Home() {
  const navs = [
    { item: "Home" },
    { item: "Events" },
    { item: "Workshops" },
    { item: "Sign In" },
  ];
  return (
    <Shell navs={navs}>
      <div className="hero bg-slate-900 p-0">
        <div className="hero-content flex-wrap-reverse p-0">
          <div className="w-screen lg:w-8/12 justify-start">
            <Slide />
          </div>
          <div className="flex flex-col lg:flex-1 items-center">
            <h1 className="text-5xl text-slate-200 -mt-10">
              Welcome to <span className="block text-green-500 ">AUST IDC</span>
            </h1>
            <div className="flex p-10 space-x-5">
              <button className="btn bg-green-500 text-slate-900 hover:text-slate-50">Join us</button>
              <button className="btn btn-link text-3xl">Explore IDC</button>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
