import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';
import { drawerStyle } from '../themes/Theme.js';

export default function DrawerLeft({page}) {
  const classes = drawerStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className= {`Phone__container__wrapper__inner__drawer ${classes.root}` }>
      <CssBaseline />
      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {page}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            position="absolute"
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                {[['Home', <HomeIcon />, '/'],
                ['Quiz', <FormatListNumberedIcon />, '/quiz'],
                ['Stats', <BarChartIcon />, '/stats'],
                ['About', <InfoIcon />, '/about']]
                .map((text, index) => (
                  <Link key={text} to={text[2]} style={{ textDecoration: 'none' , color: 'black' }}>
                    <ListItem button key={text[0]}>
                      <ListItemIcon className={classes.drawerIcon}>{text[1]}</ListItemIcon>
                      <ListItemText primary={text[0]} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
          </div>
        );
      }
