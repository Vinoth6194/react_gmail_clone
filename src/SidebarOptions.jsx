import React from "react";
import "./sidebarOptions.css";
function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOptions  ${selected && "sidebarOptions__active"}`}>
      <Icon></Icon>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
