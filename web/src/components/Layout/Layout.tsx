import React from 'react'
import { makeStyles } from '@material-ui/core'
import { NavBar } from '../Nav/NavBar'
import { LeftDrawer } from '../Drawer/LeftDrawer'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => {
  return {
    root: {
        display: 'flex',
      },
    mainContent: {
      width: '100%',
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar
  }
})

export function Layout({ children }: any) {
  const classes = useStyles();

  return (
    <div>
      <NavBar marginLeft={drawerWidth}/>
      <LeftDrawer width={drawerWidth}/>
      <div className={classes.mainContent}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}

export default Layout;