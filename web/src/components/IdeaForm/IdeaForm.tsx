import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import FileBase from 'react-file-base64';

import { useStyles } from './IdeaForm.styles';

export const IdeaForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [tags, setTags] = useState<string[]>();
  const [images, setImages] = useState<string[]>([]);

  const clear = () => {
    setTitle('');
    setDescription('');
    setTags([]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // dispatch(createIdea());
  };

  return (
    <Paper className={classes.container} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.formContainer} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Have an Idea?'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField name="message" variant="outlined" label="Description" fullWidth multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className={classes.fileInput}>
          {/* <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setImages((images) => [...images, base64])}
            /> */}
        </div>
        <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth>
              Submit
        </Button>
        <Button
          className={classes.clearButton}
          variant="contained"
          size="small"
          onClick={clear}
          fullWidth>
            Clear
        </Button>
      </form>
    </Paper>
  );
};
