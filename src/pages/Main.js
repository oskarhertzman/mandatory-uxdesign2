import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import { MainTheme } from '../themes/Theme.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Phone from '../assets/phone4.png';
import { Spinner } from '../components/Spinner.js';
import '../styles/Main.scss';

export default function Main() {
  const useStyles = makeStyles(theme => ({
  toQuiz: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: MainTheme,
  },
  }));
const classes = useStyles();

  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="Home" />
            <div className={classes.root}>
               <Button className={classes.toQuiz} variant="contained" color="primary" href="/quiz">
                 Start Quiz
               </Button>
             </div>
          </div>
        </div>
      </div>
      <Spinner />
    </div>
  );
}
