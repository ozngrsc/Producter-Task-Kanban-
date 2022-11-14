import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon className="sidebarIcons" />
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarOption;
