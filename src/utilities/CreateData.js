
function createData(stat, value) {
  return { stat, value };
}

export const rows = [
  createData('Games played', localStorage.getItem('games_played')),
  createData('Correct answers', localStorage.getItem('correct_answers')),
  createData('Incorrect answers', localStorage.getItem('incorrect_answers')),
  createData('Correct percentage', Math.floor((
    localStorage.getItem('correct_answers') /
    localStorage.getItem('incorrect_answers'))*100) + '%'),
];
