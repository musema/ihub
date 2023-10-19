import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Paper, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLoginButton } from "./Login/GoogleLoginButton";

import { useStyles } from "./Auth.styles";

export const Auth = () => {
  const classes = useStyles();
  const history = useHistory();
  const onLoginSuccess = () => {
    history.push("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          {" "}
          <LockOutlinedIcon />{" "}
        </Avatar>
        <GoogleLoginButton onLoginSuccess={onLoginSuccess} />
      </Paper>
    </Container>
  );
};
