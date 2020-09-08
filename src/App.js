import React from 'react';
import Main from './pages/Main.js';
import Quiz from './pages/Quiz.js';
import Stats from './pages/Stats.js';
import About from './pages/About.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import 'typeface-roboto';
import './styles/App.scss';

export default function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/stats" component={Stats} />
          <Route path="/about" component={About} />
        </Router>
      </HelmetProvider>
      <p id="info">Made with <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>, <a href="https://material-ui.com/">Material UI </a>and <a href= "https://opentdb.com/">Open Trivia DB API</a></p>
    </div>
  );
}
