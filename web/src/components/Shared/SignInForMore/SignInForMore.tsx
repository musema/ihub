import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useStyles } from './SignInForMore.styles';

export const SignInForMore = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={6}>
          <Typography variant="h6" align="center">
            Please Sign In for more functionalities.
          </Typography>
        </Paper>
      );
};
