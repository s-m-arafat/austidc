import React from "react";

import Shell from "./Shell";
import Slide from "./Slide";

export default function Home() {
  const navs = [
    { item: "Home" },
    { item: "Events" },
    { item: "Workshops" },
  ];
  return (
    <Shell navs={navs}>
      <div className="hero bg-hero-texture p-0 h-2/6 lg:h-3/6">
        <div className="hero-content flex-wrap-reverse p-0">
          <div className="flex flex-col lg:flex-1 items-center">
            <h1 className="text-5xl text-slate-200">
              Welcome to <span className="block text-green-500 ">AUST IDC</span>
            </h1>
            <div className="flex p-10 space-x-5">
              <button className="btn bg-green-500 text-slate-900 hover:text-slate-50">
                Join us
              </button>
              <button className="btn btn-link lg:text-3xl underline text-white hover:text-green-500">Explore IDC</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen lg:w-8/12 m-auto lg:-mt-20">
        <Slide />
      </div>
    </Shell>
  );
}
