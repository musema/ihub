import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, ListOutlined } from "@material-ui/icons";

export interface StyleProps {
  width: number;
}
const useStyles = makeStyles<Theme, StyleProps>((theme) => {
  return {
    drawer: {
      width: ({ width }) => width,
    },
    drawerPaper: {
      width: ({ width }) => width,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
  };
});
const menuItems = [
  {
    text: "All Ideas",
    icon: <ListOutlined color="secondary" />,
    path: "/ideas",
  },
  {
    text: "Got an Idea",
    icon: <AddCircleOutlineOutlined fontSize="large" color="secondary" />,
    path: "/ideas/create",
  },
];
export function LeftDrawer({ width }: any) {
  const classes = useStyles(width);
  const history = useHistory();
  const location = useLocation();
  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            {" "}
            iHub
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : ""}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
