import React, {useState, useEffect, useMemo} from 'react';
import Shuffle from '../utilities/Shuffle.js';
import Navbar from '../components/Navbar.js';
import DialogSlide from '../components/Dialog.js';
import Api from '../api/Api.js';
import { MainTheme } from '../themes/Theme.js'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
var classNames = require('classnames');

function Quiz() {
  const [questions, updateQuestions] = useState([]);
  const [value, setValue] = useState('');
  const [randomAnswers, updateRandomAnswers] = useState([]);
  const [correctAnswers, updateCorrectAnswers] = useState(0);


  useEffect (() => {
    Api().then((response) => {
      // Denna kod är orgasm
      updateQuestions(response.data.results.map(v => ({...v, all_answers: Shuffle(v.incorrect_answers.concat(v.correct_answer))})));
    }).catch((err) => {
      alert(err);
    })
  }, [])

  function handleChange (correct, e, index) {
    e.preventDefault()
    if (correct + index === e.target.value) {
      console.log("correct");
      updateCorrectAnswers(correctAnswers + 1)
    }
    else {
      console.log("incorrect");
    }
    console.log(correctAnswers);
  };

  console.log(questions);
  const useStyles = makeStyles(theme => ({
    root: {
      marginLeft: '20px',
    },
    button: {
      backgroundColor: MainTheme,
      margin: '0',
    }
  }));
  const classes = useStyles();
    return (
      <div className="Quiz">
        <Navbar page="Quiz" />
        <div className={classes.root}>
          {questions.map((question, index) => {
            const entities = {
             '&#039;': "'",
             '&quot;': '"',
             "&ntilde;": "ñ",
             "&eacute;": "é",
             "&amp;": "&" ,
             "&uuml;": "ü"
           }
            return (
            <div className='Quiz__questions__question' key={index}>
              <h2> Question {index + 1} </h2>
              <FormControl component="fieldset" key={index}>
                <FormLabel component="legend">{question.question.replace(/&#?\w+;/g, match => entities[match])}</FormLabel>
                <RadioGroup>
                  {question.all_answers.map((answer, answerIndex) => {
                    return (
                      <FormControlLabel
                        onChange={(e) => handleChange(question.correct_answer, e , index)}
                        value={answer.replace(/&#?\w+;/g, match => entities[match]) + index}
                        control={<Radio />} label={answer.replace(/&#?\w+;/g, match => entities[match])}
                        key={answerIndex}
                        />
                      )
                  })}
                </RadioGroup>
              </FormControl>
            </div>
            )
          })}
          <DialogSlide
            numCorrect={correctAnswers}
            quizLength={questions.length} />
        </div>
      </div>
    );
}

export default Quiz;
