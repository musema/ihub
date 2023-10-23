import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    searchInput: {
        ml: 1,
        flex: 1
    },
    searchIcon: {
        p: '10px'
    }
}));
