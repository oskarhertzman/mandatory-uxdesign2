import React from 'react';
import Navbar from '../components/Navbar.js';

function Stats() {
  return (
    <div className="Stats">
      <Navbar page="Stats" />
      <p> Games Played: {localStorage.getItem('games_played')} </p>
      <p> Correct Answers: {localStorage.getItem('correct_answers')} </p>
      <p> Incorrect Answers: {localStorage.getItem('incorrect_answers')} </p>
      <p> Correct Percentage:
        {Math.floor((localStorage.getItem('correct_answers')
        / localStorage.getItem('incorrect_answers'))* 100)}%</p>
    </div>
  );
}

export default Stats;
