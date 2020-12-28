import React from "react";
import "./sidebarOptions.css";
function SidebarOptions({ Icon, title, number }) {
  return (
    <div className="sidebarOptions">
      <Icon></Icon>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
