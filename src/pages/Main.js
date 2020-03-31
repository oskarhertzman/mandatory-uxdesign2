import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import { Spinner } from '../components/Spinner.js';
import { startBtnStyle } from '../themes/Theme.js';
import Phone from '../assets/phone4.png';
import Button from '@material-ui/core/Button';


export default function Main() {
  const classes = startBtnStyle();

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
