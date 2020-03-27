import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar.js';
import Api from '../api/Api.js';
import { MainTheme } from '../themes/Theme.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../styles/Main.scss';

export default function Main() {
  const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  toQuiz: {
    backgroundColor: MainTheme,
  },
  }));
const classes = useStyles();

  return (
    <div className="Main">
      <Navbar page="Main" />
      <h1 className='Main__welcome'> Welcome to Open Trivia DB  </h1>
        <h3 className='Main__helper'> Click below to start </h3>
      <div className="Main__container">
        <div className={classes.root}>
           <Button className={classes.toQuiz} variant="contained" color="primary" href="/quiz">
             Start Quiz
           </Button>
         </div>
      </div>
    </div>
  );
}
