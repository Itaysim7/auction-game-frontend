import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Summary-quiz.css';
import {QuizData} from './sq-data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Results from './results';
import { API } from "./../api-service";

var time = null
var timeRemain = null
var partid = 1;

const renderTime = ({ remainingTime,elapsedTime }) => {
  time = elapsedTime
  timeRemain = remainingTime
  if (remainingTime === 0) {
    API.setTimeOut({id: partid})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    window.location.href = `/err`
    }

  return (
    <div>
      <div className="text">Remaining</div>
      <h1 className="value">{remainingTime}</h1>
      <div className="text">seconds</div>
    </div>
  );
};
 

export class Sq extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      userAnswer: null, userAnswerId: null , currentIndex: 0, options:[], score: 0, disabled: true, 
      answers: [], quizEnd: false,  isParticipant: true, round:true, remaining: 900
    }
  }



  loadQuiz = () => 
  {
    partid=this.props.match.params.id;
    API.load_quiz({id: this.props.match.params.id})
    .then(resp => { 
      if(resp !== false)
      {
        this.setState({isParticipant: true, remaining: resp})
      }
      else
      {
        this.setState({isParticipant: false})
      }

    })
    .catch(error => console.log(error))
    const {currentIndex} = this.state;
    this.setState(() => {
      return{
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer
      }
    })
  }

  nextQuestionHandler = () => 
  {
    const {userAnswer, answer, score, userAnswerId} = this.state;
    if(userAnswer === answer)
      this.setState({score: score+1}) 
    this.state.answers.push(userAnswerId)
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
      disabled: true,
      userAnswerId:null,
    })

  }

  componentDidMount(){
    this.loadQuiz();
  }

  checkAnswer = (answer,id) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
      userAnswerId: id
    })
  }

  componentDidUpdate(prevProps, prevState)
  {
    const {currentIndex} = this.state;
    if(this.state.currentIndex !== prevState.currentIndex)
    {
      this.setState(() => {
        return{
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer,
        }
      })
      API.openQuiz({id: this.props.match.params.id, time:timeRemain})
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    }
  }
  finishHandler = () => {
    const {userAnswer, answer, score, userAnswerId} = this.state;
    this.state.answers.push(userAnswerId)
    if(userAnswer === answer)
    {
      this.setState({score: score+1}) 
      API.updateScore({id: this.props.match.params.id, score: score+1, time: time })
      .then(resp => {this.setState({round: resp})
      console.log(resp)})
      .catch(error => console.log(error))
    }
    else{
      API.updateScore({id: this.props.match.params.id, score: score, time: time})
      .then(resp => this.setState({round: resp}))
      .catch(error => console.log(error))
    }
    this.setState({quizEnd: true})
  } 
 


  render ()
  {
    const {question,round, options, remaining, currentIndex, userAnswer, quizEnd, score, answers, isParticipant} = this.state;

    if( !isParticipant)
    {
      setTimeout(() => window.location.href = `/`, 10000);
      return (<h1 style={{margin: '20%'}}>You can no longer participate in the experiment, window will close in 5 seconds</h1>)
    }
    if(quizEnd)
    {
      return(
        <Results score={score} round={round} answers={answers} id={this.props.match.params.id}/>
      )
    }
    return(
      <div className="color" style={{backgroundColor: 'rgb(76, 99, 201)'}}>
        <div className="que-con" >
          <div className="intro-header">
            <div className="timer">
              <CountdownCircleTimer size='150' style={{backgroundColor: 'green'}}  isPlaying duration={remaining} colors={[['#006777', 0.33],['#F7B801', 0.33],['#A30000', 0.33],]}>
                {renderTime}
              </CountdownCircleTimer>
            </div>
            <div>
              <h2  style={{marginTop: '2%', color: 'red'}}>{`Question ${currentIndex + 1} of ${QuizData.length}`}</h2>
              {currentIndex+1 === 6 && <h2 style={{color: 'black'}}>What value will the bidder bid, if you decide <b>not to</b> purchase any information from the information provider?</h2>}
          {currentIndex+1 === 7 && <h2 style={{color: 'black'}}>What  value will the buyers offer, if you <b>do decide</b> to purchase the information regarding the true worth of the auctioned item from the information provider?</h2>}
          {currentIndex+1 !== 6 && currentIndex+1 !== 7 && <h2 style={{color: 'black'}}>{question}</h2>}
            </div>
          </div>
          

          {
            options.map((option, index) => 
              <p key={index} className={`options ${userAnswer === option? "selected" : null}`}
              onClick={() => this.checkAnswer(option, index+1)}>
                {option}
              </p>
            )
          }
          {currentIndex < QuizData.length-1 && 
            <Button disabled={this.state.disabled}  onClick={this.nextQuestionHandler} variant="dark" size="lg" >Next</Button>

          }
          {currentIndex === QuizData.length-1 &&
            <Button disabled={this.state.disabled} onClick={this.finishHandler} variant="dark" size="lg" >Finish</Button>
          }
        </div>
      </div>

    )

  };
}

export default Sq;