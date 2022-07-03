import React from "react";

export default function Sidebar({ SideNavContents, handleClick, activeTab }) {
  return (
    <div className="block sm:hidden">
      <div className="btn-group justify-center">
        {SideNavContents.map((link) => (
          <button
            key={link.name}
            className={
                `${activeTab}` === `${link.id}`
                ? "btn btn-primary focus:outline-none"
                : "btn"
            }
            onClick={handleClick}
            id={link.id}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
}
