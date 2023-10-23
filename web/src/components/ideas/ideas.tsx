import React from "react";
import { Grid } from "@material-ui/core";
import { RootStateOrAny, useSelector } from "react-redux";

import { Idea } from "./idea/idea";
import useStyles from "./idea.styles";
import { IIdea } from "../../models/idea";

export const Ideas = () => {
  const { ideas } = useSelector((state: RootStateOrAny) => state.ideas.ideas);
  const classes = useStyles();
  if (ideas === undefined || !Array.isArray(ideas) || ideas.length === 0) {
    return <>No ideas were found</>;
  }

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {Array.isArray(ideas) &&
        ideas.map((idea: IIdea) => (
          <Grid key={idea.id} item xs={12} sm={12} md={6} lg={3}>
            <Idea idea={idea} />
          </Grid>
        ))}
    </Grid>
  );
};
