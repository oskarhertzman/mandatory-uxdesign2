import React, {useState, useEffect, useMemo} from 'react';
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
  const [newArr, updateNewArr] = useState([]);

  useEffect (() => {
    Api().then((response) => {
      console.log(response.data.results);
      updateQuestions(response.data.results.map(v => ({...v, all_answers: true})));
      let merge = [];
      let randomized = [];
      for (let question of response.data.results) {
        console.log(question);
        merge.push(question.incorrect_answers.concat(question.correct_answer));
      }
      for (let teste of merge) {
      randomized.push(shuffle(teste));
      }
      console.log(randomized);
      updateRandomAnswers(merge);
    }).catch((err) => {
      alert(err);
    })
  }, [])

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

console.log(randomAnswers);
console.log(questions);

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
            let answers2 = [];
             answers2.push(question.incorrect_answers.concat(question.correct_answer));
            const entities = {
             '&#039;': "'",
             '&quot;': '"',
             "&ntilde;": "ñ",
             "&eacute;": "é",
             "&amp;": "&" ,
             "&uuml;": "ü"
           }
           console.log(answers2);
            return (
            <div className='Quiz__questions__question' key={index}>
              <h2> Question {index + 1} </h2>
              <FormControl component="fieldset" key={index}>
                <FormLabel component="legend">{question.question.replace(/&#?\w+;/g, match => entities[match])}</FormLabel>
                <RadioGroup>
                  {answers2[0].map((answer, answerIndex) => {
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
