import { makeStyles, createMuiTheme } from '@material-ui/core/styles';


// Styling Constants
export const MainTheme = '#57518A';
export const SecondTheme = 'rgba(0, 0, 0, 0.54);';
export const buttonTheme = createMuiTheme({
  palette: {
    primary: {500: MainTheme},
  },
});
export const entities = {
  '&#039;': "'",
  '&quot;': '"',
  '&ldquo;': '“',
  '&rdquo;': '”',
  "&ntilde;": "ñ",
  "&eacute;": "é",
  "&amp;": "&" ,
  "&uuml;": "ü"
}
const drawerWidth = 240;

// Themes
export const startBtnPosition = makeStyles(theme => ({
  toQuiz: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
export const drawerStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    zIndex: '0',
    overflow: 'hidden',
    backgroundColor: MainTheme,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolBar: {
    backgroundColor: MainTheme,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: '18px',
    borderTopLeftRadius: '25px',
    position: 'absolute',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerIcon: {
    color: MainTheme,
  }
}));
