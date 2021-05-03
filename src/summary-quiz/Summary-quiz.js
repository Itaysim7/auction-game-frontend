import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Summary-quiz.css';
import {QuizData} from './sq-data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Results from './results';

 

export class Sq extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      userAnswer: null, userAnswerId: null , currentIndex: 0, options:[], score: 0, disabled: true, 
      answers: [], quizEnd: false
    }
  }

  loadQuiz = () => 
  {
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
    const {userAnswer, answer, score, answers, userAnswerId} = this.state;
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
    }
  }
  finishHandler = () => {
    const {userAnswer, answer, score, userAnswerId} = this.state;
    this.state.answers.push(userAnswerId)
    if(userAnswer === answer)
      this.setState({score: score+1}) 
    this.setState({quizEnd: true})
  } 
  review = () => {
    window.location.href = '/review-quiz';
} 


  render ()
  {
    const {question, options, currentIndex, userAnswer, quizEnd, score, answers} = this.state;

    if(quizEnd)
    {
      return(
        <Results score={score} answers={answers}/>
      )
    }
    return(
      <div className="color">
        <div className="que-con" >
          <div className="timer">
            <CountdownCircleTimer isPlaying duration={900} colors={[['#006777', 0.33],['#F7B801', 0.33],['#A30000', 0.33],]}>
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
          <h2>{question}</h2>
          <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
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