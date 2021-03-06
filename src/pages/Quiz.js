import React, { useState, useEffect } from 'react';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import DrawerLeft from '../components/Drawer.js';
import DialogSlide from '../components/Dialog.js';
import { Spinner } from '../components/Spinner.js';
import { MainTheme } from '../themes/Theme.js'
import { entities } from '../themes/Theme.js';
import Shuffle from '../utilities/Shuffle.js';
import Api from '../api/Api.js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Phone from '../assets/phone4.png';
import '../styles/Phone.scss';

export default function Quiz() {
  const [questions, updateQuestions] = useState([]);
  const [correctAnswers, updateCorrectAnswers] = useState(0);
  const { promiseInProgress } = usePromiseTracker();

  useEffect (() => {
    trackPromise(
      Api().then((response) => {
        updateQuestions(response.data.results.map(q => ({...q, all_answers: Shuffle(q.incorrect_answers.concat(q.correct_answer))})));
      }).catch((err) => {
        alert(err);
      })
    )
  }, [])

  function handleChange (correct, e, index) {
    e.preventDefault()
    if (correct + index === e.target.value) {
      updateCorrectAnswers(correctAnswers + 1)
    }
  };

  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="Quiz" />
            <div className="Phone__container__wrapper__inner__content">
              {questions.map((question, index) => {
                return (
                  <div className='Phone__container__wrapper__inner__content__question' key={index}>
                    <h2 tabIndex="0"> Question {index + 1} </h2>
                    <FormControl component="fieldset" key={index} >
                      <FormLabel
                        tabIndex="0"
                        style={{color: MainTheme, fontWeight: 'bold', paddingBottom: '10px'}}
                        component="legend">{question.question.replace(/&#?\w+;/g, match => entities[match])}
                      </FormLabel>
                      <RadioGroup>
                        {question.all_answers.map((answer, answerIndex) => {
                          return (
                            <FormControlLabel
                              tabIndex="0"
                              aria-labelledby={`alert-question-title"${answerIndex}`}
                              onChange={(e) => handleChange(question.correct_answer, e , index)}
                              value={answer.replace(/&#?\w+;/g, match => entities[match]) + index}
                              control={<Radio />}
                              label={answer.replace(/&#?\w+;/g, match => entities[match])}
                              key={answerIndex}
                            />
                          )
                        })}
                      </RadioGroup>
                    </FormControl>
                  </div>
                )
              })}
              {
                (!promiseInProgress) ?
                <DialogSlide
                  numIncorrect={questions.length - correctAnswers}
                  numCorrect={correctAnswers}
                  quizLength={questions.length} /> : null
                }
              </div>
            </div>
          </div>
        </div>
        <Spinner />
      </div>
    );
  }
