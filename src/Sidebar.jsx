import { Button } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
    </div>
  );
}
