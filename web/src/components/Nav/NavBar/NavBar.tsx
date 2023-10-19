import React from "react";
import { NavBarLeft } from "./NavBarLeft/NavBarLeft";
import { NavBarRight } from "./NavBarRight/NavBarRight";
import { useStyles } from "./NavBar.styles";
import { AppBar, Box, Toolbar } from "@material-ui/core";

interface INavBarProps {
  marginLeft: number;
}
export function NavBar({ marginLeft }: INavBarProps) {
  const classes = useStyles({ marginLeft });
  return (
    <AppBar className={classes.appBar} position="fixed" color="primary">
      <Toolbar>
        <NavBarLeft />
        <Box sx={{ flexGrow: 1 }} />
        <NavBarRight />
      </Toolbar>
    </AppBar>
  );
}
