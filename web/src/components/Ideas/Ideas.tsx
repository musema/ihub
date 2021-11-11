import React from 'react';
import { Grid } from '@material-ui/core';
import { RootStateOrAny, useSelector } from 'react-redux';

import { Idea } from './Idea/Idea';
import useStyles from './Idea.styles';
import { IIdea } from '../../models/idea';

export const Ideas = () => {
  const { ideas } = useSelector((state: RootStateOrAny) => state.ideas.ideas);
  const classes = useStyles();
  if (!ideas || ideas?.length === 0) return <>'No ideas'</>;

  return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {ideas?.map((idea: IIdea) => (
          <Grid key={idea.id} item xs={12} sm={12} md={6} lg={3}>
            <Idea idea={idea} />
          </Grid>
        ))}
      </Grid>
  );
};
