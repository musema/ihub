import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { MenuProps } from "@material-ui/core";

export const FarRightMenu = (props: MenuProps) => {
  return (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={props.id}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={props.open}
      onClose={props.onClose}
    >
      <MenuItem onClick={() => {}}>Profile</MenuItem>
      <MenuItem onClick={() => {}}>My account</MenuItem>
      <MenuItem onClick={() => {}}>Logout</MenuItem>
    </Menu>
  );
};
