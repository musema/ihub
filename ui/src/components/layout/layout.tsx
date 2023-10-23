import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavBar } from "../nav/navBar";
import { LeftDrawer } from "../drawer/leftDrawer";

const drawerWidth = 0;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "grid",
    },
    title: {
      padding: theme.spacing(2),
    },
    mainContent: {
      display: "grid",
      gridTemplateColumns: "200px auto",
      marginTop: "50px",
      width: "100%",
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  };
});

export function Layout({ children }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar marginLeft={drawerWidth} />
      <div className={classes.mainContent}>
        <LeftDrawer width={drawerWidth} />
        {/* <div className={classes.toolbar}></div> */}
        {children}
      </div>
    </div>
  );
}

export default Layout;
