import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RuleIcon from "@mui/icons-material/Rule";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import AddIcon from "@mui/icons-material/Add";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ProfilePic from "../../utils/images/neil.png";
import EpodpayPic from "../../utils/images/epodpay.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_option_top">
        <Link to="/dashboard" className="sidebar_option">
          <SidebarOption Icon={HomeOutlinedIcon} text="Dashboard" />
        </Link>
        <Link to="/feedback" className="sidebar_option">
          <SidebarOption Icon={ChatBubbleOutlineOutlinedIcon} text="Feedback" />
        </Link>
        <Link to="/task" className="sidebar_option">
          <SidebarOption Icon={RuleIcon} text="Task" />
        </Link>
        <Link to="/roadmap" className="sidebar_option">
          <SidebarOption Icon={ExploreOutlinedIcon} text="Roadmap" />
        </Link>
        <Link to="/changelog" className="sidebar_option">
          <SidebarOption Icon={SyncOutlinedIcon} text="Changelog" />
        </Link>
      </div>
      <div className="sidebar_option_bottom">
        <Link to="/invitePeople" className="sidebar_option">
          <SidebarOption Icon={AddIcon} text="Invite People" />
        </Link>
        <Link to="/help" className="sidebar_option">
          <SidebarOption Icon={MessageOutlinedIcon} text="Help & Community" />
        </Link>
        <Link to="/notifications" className="sidebar_option">
          <SidebarOption
            Icon={NotificationsNoneOutlinedIcon}
            text="Notifications"
          />
        </Link>
        <hr />
        <div className="sidebar_profile">
          <img src={ProfilePic} alt="ProfilePicture" />
          <h4>Neil Larkins</h4>
        </div>
        <hr />
        <div className="sidebar_profile">
          <img src={EpodpayPic} alt="ProfilePicture" />
          <h4>Epodpay Inc.</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
