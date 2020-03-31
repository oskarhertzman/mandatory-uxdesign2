import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide({numIncorrect, numCorrect, quizLength}) {
  const [open, setOpen] = useState(false);
  const [localGames] = useState(parseInt(localStorage.getItem('games_played'),10) || '');
  const [localCorrect] = useState(parseInt(localStorage.getItem('correct_answers'),10) || '');
  const [localIncorrect] = useState(parseInt(localStorage.getItem('incorrect_answers'),10) || '');


  const handleClickOpen = () => {
    let totalGames = localGames + 1;
    let totalCorrect = numCorrect + localCorrect;
    let totalInCorrect = numIncorrect + localIncorrect;
    localStorage.setItem('games_played', totalGames);
    localStorage.setItem('correct_answers', totalCorrect);
    localStorage.setItem('incorrect_answers', totalInCorrect);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Phone__container__wrapper__inner__content__submit" >
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Results"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You answered {numCorrect}/{quizLength} questions correct
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" href="/quiz">
            RE-START
          </Button>
          <Button onClick={handleClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
