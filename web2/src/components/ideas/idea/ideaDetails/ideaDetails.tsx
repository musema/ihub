import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider } from "@material-ui/core/";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, Link } from "react-router-dom";

import { getIdeas } from "../../../../store/ideas/actions/ideas.actions";
import { useStyles } from "./ideaDetails.styles";
import { IIdea } from "../../../../models/idea";
import { Box, CardMedia } from "@mui/material";

export const IdeaDetails = () => {
  const { id } = useParams<any>();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [idea, setIdea] = useState<IIdea>();
  const { ideas } = useSelector((state: RootStateOrAny) => state.ideas.ideas);
  useEffect(() => {
    dispatch(getIdeas());
  }, [dispatch]);

  useEffect(() => {
    const setCurrentIdea = () => {
      const currentIdea = ideas.find((i: IIdea) => i.id === id);
      setIdea(currentIdea);
    };
    setCurrentIdea();
  }, [ideas, id]);

  if (!idea) return null;

  return (
    <Paper className={classes.root} elevation={6}>
      <Box className={classes.card}>
        <Box className={classes.summary}>
          <Typography variant="h3" component="h2">
            {idea.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {idea.tags?.map((tag) => (
              <Link
                to={`/tags/${tag}`}
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                {` #${tag} `}
              </Link>
            ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {idea.description}
          </Typography>
          <Typography variant="body1">
            {moment(idea.createdAt).fromNow()}
          </Typography>
          <Typography variant="h6">
            Owner:
            <Link
              to={`/users/${idea.id}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${idea.title}`}
            </Link>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </Box>
        <Box className={classes.carousel}>
          <CardMedia
            component="img"
            className={classes.image}
            src={"https://abc.png"}
            alt={idea.title}
          />
        </Box>
      </Box>
    </Paper>
  );
};
