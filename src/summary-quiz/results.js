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

  if(isreview)
  {
    return (
      <SQAns answers={props.answers} ret={ret}/>
    )
  }
  else 
  { 
    return(
    <div className="color">
      <div className="result">
        <h1>pass mark</h1>
        <h4>Your score: {props.score}/{QuizData.length}</h4>
        <h4>Passing score: 7/{QuizData.length}</h4>
        <hr/> 
        <h1>Result:</h1>
        {props.score >= 7 && <h3 style={{color : 'green', marginBottom : '30px'}}>Congratulations, you passed</h3>}
        {props.score < 7 && <h3 style={{color : 'red', marginBottom : '30px'}}>Failed</h3>}
        <Button onClick={review} variant="secondary" size="lg" >Review Quiz</Button>
      </div>
    </div>
    )
  }
}

export default Results;
