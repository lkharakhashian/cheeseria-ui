import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ff6f00',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    margin: '30px 0',
  },
  content: {
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  cheeseList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    margin: '20px 0',
  },
  card: {
    width: 345, // Set a fixed width for the cards
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  media: {
    height: 200,
  },
});

export default useStyles;
