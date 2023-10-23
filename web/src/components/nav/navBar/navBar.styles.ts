import { makeStyles, Theme } from '@material-ui/core/styles';

interface INavBarStyleProps {
  marginLeft: number;
}
export const useStyles = makeStyles<Theme, INavBarStyleProps>((theme) => ({
  appBar: {
    color: theme.palette.primary.main,
    marginLeft: ({marginLeft}) => marginLeft,
    width: ({marginLeft}) => `calc(100% - ${marginLeft}px)`,
    maxWidth: ({marginLeft}) => `calc(100% - ${marginLeft}px)`,
    flexGrow: 1,
  }
}));
