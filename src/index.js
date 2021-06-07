import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Det from './Forms';
import Desc from './Static-pages';
import Sq from './summary-quiz/Summary-quiz';
import Survey from './survey/Survey';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter} from 'react-router-dom';
import Trainig from './training/training';
import Yes from './training/yes';
import No from './training/no';
import IntroTrainig from './training/intro-training';
import trainingSummary from './training/training-summary';
import gameSummary from './game/game-summary';
import IntroGame from './game/intro-game';
import Game from './game/game';
import GameNo from './game/game-no';
import GameYes from './game/game-yes';
import Err from './err'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App}/>
      <Route exact path="/err" component={Err}/>
      <Route exact path="/description/:id" component={Desc}/>
      <Route exact path="/forms/:id" component={Det}/>
      <Route exact path="/survey/:id" component={Survey}/>
      <Route exact path="/summary-quiz/:id" component={Sq}/>
      <Route exact path="/training/:id/" component={Trainig}/>
      <Route exact path="/game/:id/" component={Game}/>
      <Route exact path="/yes/:id/:question" component={Yes}/>
      <Route exact path="/game-yes/:id/:question" component={GameYes}/>
      <Route exact path="/no/:id/:question" component={No}/>
      <Route exact path="/game-no/:id/:question" component={GameNo}/>
      <Route exact path="/training-summary/:id" component={trainingSummary}/>
      <Route exact path="/game-summary/:id" component={gameSummary}/>
      <Route exact path="/intro-training/:id" component={IntroTrainig}/>
      <Route exact path="/intro-game/:id" component={IntroGame}/>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
