import { Button, IconButton } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./sidebar.css";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number="58"
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Starred" number="6" />
      <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number="16" />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number="61" />
      <SidebarOptions Icon={NearMeIcon} title="Sent" number="69" />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number="86" />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number="36" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
