import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavBarLeft } from './NavBarLeft/NavBarLeft';
import { NavBarRight } from './NavBarRight/NavBarRight';
import { useStyles } from './NavBar.styles';

export const NavBar = () => {
  const classes = useStyles();
  return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <NavBarLeft />
            <Box sx={{ flexGrow: 1 }} />
            <NavBarRight />
        </Toolbar>
      </AppBar>
  );
}
