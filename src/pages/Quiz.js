import React, {useState, useEffect, useMemo} from 'react';
import { trackPromise } from 'react-promise-tracker';
import Shuffle from '../utilities/Shuffle.js';
import Navbar from '../components/Navbar.js';
import DrawerLeft from '../components/Drawer.js';
import DialogSlide from '../components/Dialog.js';
import { Spinner } from '../components/Spinner.js';
import Api from '../api/Api.js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Phone from '../assets/phone4.png';
import '../styles/Phone.scss';



export default function Quiz() {
  const [questions, updateQuestions] = useState([]);
  const [value, setValue] = useState('');
  const [randomAnswers, updateRandomAnswers] = useState([]);
  const [correctAnswers, updateCorrectAnswers] = useState(0);


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
      console.log("correct");
      updateCorrectAnswers(correctAnswers + 1)
    }
    else {
      console.log("incorrect");
    }
    console.log(correctAnswers);
  };

    return (
      <div className="Phone">
        <div className="Phone__container">
          <div className="Phone__container__wrapper">
            <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
            <div className="Phone__container__wrapper__inner">
              <DrawerLeft page="Phone" />

          {questions.map((question, index) => {
            const entities = {
             '&#039;': "'",
             '&quot;': '"',
             '&ldquo;': '“',
             '&rdquo;': '”',
             "&ntilde;": "ñ",
             "&eacute;": "é",
             "&amp;": "&" ,
             "&uuml;": "ü"
           }
            return (
            <div className='Phone__container__wrapper__inner__question' key={index}>
              <h2> Question {index + 1} </h2>
              <FormControl component="fieldset" key={index} >
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
        </div>
          </div>
        </div>
        <DialogSlide
          numIncorrect={questions.length - correctAnswers}
          numCorrect={correctAnswers}
          quizLength={questions.length} />
        <Spinner />
      </div>
    );
}
