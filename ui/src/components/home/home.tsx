import React, { FC, useEffect } from "react";
import { Container, Grow } from "@mui/material";
import { useDispatch } from "react-redux";

import { getIdeas } from "../../store/ideas/actions/ideas.actions";
import { Ideas } from "../ideas/ideas";
import { useStyles } from "./home.styles";
import Grid from "@material-ui/core/Grid";

export const Home: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIdeas());
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.container}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Ideas />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
