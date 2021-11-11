
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  formContainer: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  submitButton: {
    marginBottom: 10,
    color: theme.palette.primary.contrastText
  },
  clearButton: {
    // no style yet
  },
}));
