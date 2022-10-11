import React from "react";
import SidebarOption from "./SidebarOption";
import { Twitter, Home, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../index.css";

function Sidebar() {
  return (
    <div className="space-x-4 flex-0.3 border-r-[-1px] mr-3">
      <Twitter className="twitter text-blue-500 cursor-pointer" />

      <div className="">
        <SidebarOption active Icon={Home} text="Home" />
        <SidebarOption Icon={Search} text="Explore" />
        <SidebarOption Icon={NotificationsNone} text="Notifications" />
        <SidebarOption Icon={MailOutline} text="Messages" />
        <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
        <SidebarOption Icon={ListAlt} text="Lists" />
        <SidebarOption Icon={PermIdentity} text="Profile" />
        <SidebarOption Icon={MoreHoriz} text="More" />
      </div>
      <Button variant="contained" size="large" className=" !w-64 !rounded-3xl !mt-5 !p-3 !hover:bg-sky-100 !hover-transition">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
