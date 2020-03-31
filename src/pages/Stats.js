import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import Phone from '../assets/phone4.png';
import '../styles/Phone.scss';


export default function Stats() {
  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="Stats" />
            <div className="Phone__container__wrapper__inner__content">
              <h2 tabIndex="0"> Games Played:</h2>
              <p tabIndex="0">{localStorage.getItem('games_played')}</p>
              <h2 tabIndex="0"> Correct Answers:</h2>
              <p tabIndex="0">{localStorage.getItem('correct_answers')}</p>
              <h2 tabIndex="0"> Incorrect Answers:</h2>
              <p tabIndex="0">{localStorage.getItem('incorrect_answers')}</p>
              <h2 tabIndex="0"> Correct Percentage:</h2>
              <p tabIndex="0">{Math.floor((localStorage.getItem('correct_answers')
                / localStorage.getItem('incorrect_answers'))*100)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
