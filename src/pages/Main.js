import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import { Spinner } from '../components/Spinner.js';
import { startBtnPosition } from '../themes/Theme.js';
import { buttonTheme } from '../themes/Theme.js';
import Phone from '../assets/phone4.png';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Main() {
  const classes = startBtnPosition();
  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="Home" />
            <div className={classes.root}>
              <ThemeProvider theme={buttonTheme}>
                <Button className={classes.toQuiz} variant="contained" color="primary" href="/quiz">
                Start Quiz
              </Button>
            </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <Spinner />
    </div>
  );
}
