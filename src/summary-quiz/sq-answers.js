import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuizData} from './sq-data'
import './Summary-quiz.css';


function SQAns(props) {

  const ret = () => {
    window.location.href = `/intro-training/${props.id}`;
  }  
 
    return (
    <div className="color" style={{backgroundColor: 'rgb(76, 99, 201)', height:'3900px'}}>
      <div className="que-con">
          {QuizData.map(ques =>
            <p key={ques.id}>
                <span>{`Question ${ques.id + 1} of ${QuizData.length}`}</span>
                <h2>{ques.question}</h2>
                {ques.options.map((opt,index) =>
                    <p key={index}  style={{ color: 'black'}} 
                    className={`options ${opt === ques.answer? "correct" : props.answers[ques.id] === index+1? "wrong": null}`}>
                        {opt}
                    </p>   
                )}
            </p>)}
          <Button style={{ marginBottom : '30px'}} onClick={ret} variant="secondary" size="lg" >Next</Button>
      </div>
    </div>    
    );
  }

  export default SQAns;