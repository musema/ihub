import React from "react";
import { NavBarLeft } from "./navBarLeft/navBarLeft";
import { NavBarRight } from "./navBarRight/navBarRight";
import { useStyles } from "./navBar.styles";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface INavBarProps {
  marginLeft: number;
}
export function NavBar({ marginLeft }: INavBarProps) {
  const classes = useStyles({ marginLeft });
  return (
    <AppBar className={classes.appBar} position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          {" "}
          iHub
        </Typography>
        <NavBarLeft />
        <Box sx={{ flexGrow: 1 }} />
        <NavBarRight />
      </Toolbar>
    </AppBar>
  );
}
