import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import Button from '@material-ui/core/Button';
import Phone from '../assets/phone4.png';


function Stats() {
  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="Stats" />
            <p> Games Played: {localStorage.getItem('games_played')} </p>
            <p> Correct Answers: {localStorage.getItem('correct_answers')} </p>
            <p> Incorrect Answers: {localStorage.getItem('incorrect_answers')} </p>
            <p> Correct Percentage:
              {Math.floor((localStorage.getItem('correct_answers')
              / localStorage.getItem('incorrect_answers'))* 100)}%</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Stats;
