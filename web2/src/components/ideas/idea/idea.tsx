import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Lightbulb } from "@mui/icons-material";

import moment from "moment";
import { useHistory } from "react-router-dom";

import { useStyles } from "./idea.styles";
import { IIdeaProps } from "./idea.types";
import { ButtonBase } from "@material-ui/core";

export const Idea = ({ idea }: IIdeaProps) => {
  const history = useHistory();
  const classes = useStyles();

  const openIdeaDetails = (e: any) => {
    history.push(`/ideas/${idea.id}`);
  };

  return (
    <Card className={classes.container} raised elevation={6}>
      <ButtonBase
        name="test"
        className={classes.cardButton}
        onClick={openIdeaDetails}
      >
        <CardMedia
          component="img"
          className={classes.image}
          image="../../../images/ideaunsplash.jpg"
          title={idea.title}
        />
        <CardMedia>
          <Lightbulb fontSize="large" />
        </CardMedia>
        <div className={classes.overlay}>
          <Typography variant="h6">{idea.title}</Typography>
          <Typography variant="body2">
            {moment(idea.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.tags}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {idea.tags?.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {idea.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {idea.description}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};
