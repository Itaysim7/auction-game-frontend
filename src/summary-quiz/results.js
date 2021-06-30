import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './Summary-quiz.css';
import {QuizData} from './sq-data'
import 'bootstrap/dist/css/bootstrap.min.css';
import SQAns from './sq-answers';

function Results(props)
{
  const [isreview, setIsreview] = useState(false);
  const review = () => {
    setIsreview(true)
  }
  const ret = () => {
    setIsreview(false)
  }
  
  const nextClicked = () => {
    window.location.href = `/intro-training/${props.id}`;
  }
  const tryAgainClicked = () => {
    window.location.href =  `/summary-quiz/${props.id}`;
  }
  const timeout = () => {
    setTimeout(() => window.location.href = `/`, 12000);
  }

  if(isreview)
  {
    return (
      <SQAns id={props.id} answers={props.answers} ret={ret}/>
    )
  }
  else 
  { 
    return(
    <div className="color" style={{backgroundColor: 'rgb(76, 99, 201)'}}>
      <div className="result">
        <h1>pass mark</h1>
        <h4>Your score: {props.score}/{QuizData.length}</h4>
        <h4>Passing score: 7/{QuizData.length}</h4>
        <hr/> 
        <h1>Result:</h1>
        {props.score === 10 && 
          <div>
              <h2 style={{color : 'green', marginBottom : '30px'}}>Congratulations, you passed</h2>
              <Button onClick={review} variant="secondary" size="lg" >Review Quiz</Button>
              <Button style={{float : 'right'}} onClick={nextClicked} variant="secondary" size="lg" >Next</Button>
          </div>
        }
        {props.score < 7 && props.round &&
          <div>
              <h2 style={{color : 'red', marginBottom : '30px'}}>Failed</h2>
              <Button onClick={tryAgainClicked} variant="secondary" size="lg" >Try again</Button>
          </div>
        }
        {props.score < 7 && !props.round &&
          <div>
              <h2 style={{color : 'red', marginBottom : '30px'}}>Failed, you don't have another attemp <br/>
              You can no longer participate in the experiment, window will close in 10 seconds</h2>
              {timeout()}
          </div>
        }
        {props.score > 6 && props.score <10 &&
          <div>
              <h2 style={{color : 'green', marginBottom : '30px'}}>Congratulations, you passed</h2>
              <Button onClick={review} variant="secondary" size="lg" >Review Quiz</Button>
          </div>
        }
      </div>
    </div>
    )
  }
}

export default Results;
