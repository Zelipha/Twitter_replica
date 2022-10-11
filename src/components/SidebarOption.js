import React from "react";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption, flex items-center cursor-pointer p-3 hover:bg-gray-200 rounded-3xl text-lg">
      <Icon className="mr-4" />
      <h2 className="">{text}</h2>
    </div>
  );
}

export default SidebarOption;
