import React from 'react';
import { MainTheme } from '../themes/Theme.js'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

export default function Navbar({page}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: MainTheme,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
 const classes = useStyles();
  return (
      <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/main' style={{ textDecoration: 'none' , color: 'black' }}>
          <MenuItem onClick={handleClose}>Main</MenuItem>
        </Link>
        <Link to='/quiz' style={{ textDecoration: 'none' , color: 'black' }}>
          <MenuItem href="/quiz" onClick={handleClose}>Quiz</MenuItem>
        </Link>
        <Link to='/stats' style={{ textDecoration: 'none' , color: 'black' }}>
          <MenuItem onClick={handleClose}>Stats</MenuItem>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' , color: 'black' }}>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
      </Menu>
          <Typography variant="h6" color="inherit">
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
