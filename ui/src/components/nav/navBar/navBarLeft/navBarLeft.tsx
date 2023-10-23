import React from "react";

import { IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { useStyles } from "./navBarLeft.styles";

export const NavBarLeft = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.container}>
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.searchInput}
        placeholder="Search iHub"
        inputProps={{ "aria-label": "search ihub" }}
      />
      <IconButton
        className={classes.searchIcon}
        type="submit"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
