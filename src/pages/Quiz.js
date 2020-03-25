import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar.js';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Api from '../api/Api.js';

function Quiz() {

  const [questions, updateQuestions] = useState([]);
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };
  const useStyles = makeStyles(theme => ({
    root: {
      marginLeft: '20px',
    },
  }));

  useEffect (() => {
    Api().then((response) => {
      updateQuestions(response.data.results);
      console.log(response.data.results);
    }).catch((err) => {
      alert(err);
    })
  }, [])
  const classes = useStyles();
  return (
    <div className="Quiz">
      <Navbar page="Quiz" />
      <div className={classes.root}>

        {questions.map((question, index) => {
          let answers = [];
          answers.push(question.incorrect_answers.concat(question.correct_answer));
          const entities = {
           '&#039;': "'",
           '&quot;': '"',
           "&ntilde;": "ñ",
           "&eacute;": "é",
           "&amp;": "&" ,
           "&uuml;": "ü"
         }

         function shuffle(array) {
           var currentIndex = array.length, temporaryValue, randomIndex;
           while (0 !== currentIndex) {
             randomIndex = Math.floor(Math.random() * currentIndex);
             currentIndex -= 1;
             temporaryValue = array[currentIndex];
             array[currentIndex] = array[randomIndex];
             array[randomIndex] = temporaryValue;
           }
           return array;
         }
         shuffle(answers[0]);
         console.log(answers[0].length);
          return (
          <div className='Quiz__questions__question' key={index}>
            <h2> Question {index + 1} </h2>
            <FormControl component="fieldset">
              <FormLabel component="legend">{question.question.replace(/&#?\w+;/g, match => entities[match])}</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {answers[0].map((answer, index) =>
                    <FormControlLabel value={answer} control={<Radio />} label={answer} key={index} />
                )}
              </RadioGroup>
            </FormControl>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default Quiz;
