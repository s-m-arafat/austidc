import React from "react";

export default function Sidebar({SideNavContents , handleClick, activeTab}) {
  return (
    <div className="drawer-side hidden sm:block">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <div className="menu p-4 overflow-y-auto w-80 bg-slate-100 text-white min-h-screen space-y-3">
        {SideNavContents.map((link) => (
            <button key={link.name} className={`${activeTab}` === `${link.id}`? "btn btn-primary focus:outline-none":"btn"} onClick={handleClick} id={link.id}>{link.name}</button>
        ))}
      </div>
    </div>
  );
}
