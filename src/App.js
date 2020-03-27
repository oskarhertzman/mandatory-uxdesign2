import React from 'react';
import Main from './pages/Main.js';
import Quiz from './pages/Quiz.js';
import Stats from './pages/Stats.js';
import About from './pages/About.js';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import 'typeface-roboto';
import './styles/App.scss';
function App() {

  let redirect;
  if (window.location.pathname === "/") {
    redirect = <Redirect to="/main" />
  }

  return (
    <div className="App">
    <HelmetProvider>
       <Router>
         {redirect}
         <Route path="/main" component={Main} />
         <Route path="/quiz" component={Quiz} />
         <Route path="/stats" component={Stats} />
         <Route path="/about" component={About} />
     </Router>
   </HelmetProvider>
 </div>
  );
}

export default App;
