import React, { Component } from 'react';
import '../training/training.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { API } from "./../api-service";
import Matrix from './../Matrix';
import ProgressBar from "@ramonak/react-progress-bar";

var time = null

const renderTime = ({ remainingTime,elapsedTime }) => {
  time = elapsedTime
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div>
      <div className="text">Remaining</div>
      <h1 className="value">{remainingTime}</h1>
      <div className="text">seconds</div>
    </div>
  );
};
 
export class Game extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
        isParticipant: false, currentIndex: 1, questionId: 1, 
        x:1 , y:1, w:1, zv:1, table : [-1], isButtonDisabled: true
    }
  }
  

  yesClicked = () =>
  {
    const {questionId, currentIndex} = this.state;
    API.postAnswerGame({'id': this.props.match.params.id, 'score':1, 'yes_no':true,
                  'round': currentIndex, 'question':questionId})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    window.location.href = `/game-yes/${this.props.match.params.id}/${questionId}`;
  }
  noClicked = () =>
  {
    const {questionId, currentIndex} = this.state;
    API.postAnswerGame({'id': this.props.match.params.id, 'score':1, 'yes_no':false,
                  'round': currentIndex, 'question':questionId})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    window.location.href = `/game-no/${this.props.match.params.id}/${questionId}`;
  }

  loadData = () => 
  {
    API.passInstructions({id: Number(this.props.match.params.id)})
    .then(resp => this.setState({isParticipant: resp}))
    .catch(error => console.log(error))

    API.get_game({id: Number(this.props.match.params.id)})
        .then(resp => {
            if(resp === false)
            {
              this.setState({isParticipant: resp}) 
            }
            else
            {
              const temp_zv = (resp.z * resp.voi).toFixed(2) 
              const tempTable = [[resp.v11, resp.v12, resp.v13, resp.v14, resp.v15, resp.v16, resp.v17],
                              [resp.v21, resp.v22, resp.v23, resp.v24, resp.v25, resp.v26, resp.v27],
                              [resp.v31, resp.v32, resp.v33, resp.v34, resp.v35, resp.v36, resp.v37],
                              [resp.v41, resp.v42, resp.v43, resp.v44, resp.v45, resp.v46, resp.v47],
                              [resp.v51, resp.v52, resp.v53, resp.v54, resp.v55, resp.v56, resp.v57]]
              this.setState({currentIndex: resp.round, x: resp.x, y:resp.y, w:resp.w, zv:temp_zv, table: tempTable, questionId: resp.id})  
            }
  })
    .catch(error => console.log(error))
    setTimeout(() => this.setState({ isButtonDisabled: false }), 10000);
    setTimeout(() => alert("3 minutes passed"), 180000);

  }

  componentDidMount(){
    this.loadData();
  }

  render ()
  {
    const {isParticipant, x, y, w, zv, table, currentIndex, isButtonDisabled} = this.state;

    if( !isParticipant)
        return (<h1>error</h1>)

    return(
      <div className="color">
        <div className="que-con" >
          <div className="training-header">
              <div className="training-timer">
                <CountdownCircleTimer isPlaying duration={360} colors={[['#006777', 0.33],['#F7B801', 0.33],['#A30000', 0.33],]}>
                {renderTime}
                </CountdownCircleTimer>
              </div>
              <div>
                <h1 style={{color : 'black'}}>The Mysterious Auction Game</h1>
                <h2 style={{color : 'red'}}>Round {currentIndex}/20</h2>
                <ProgressBar labelSize="10px" bgColor="blue"   completed={Math.floor(currentIndex/20*100)} />;
                <img className="img-training" src={process.env.PUBLIC_URL + '/img.png'} alt="logo" />
              </div>
          </div>
          <div className="training-body">

            <div className="bidders">
                <img className="img-bidders" src={process.env.PUBLIC_URL + '/bidders.png'} alt="logo" />
                <h2 style={{color : 'black'}}>number of bidders= {w}</h2>
            </div>
            <Matrix size={40} x={x} y={y} table={table} />
            <div className="bidders">
                <img className="img-info" src={process.env.PUBLIC_URL + '/info.png'} alt="logo" />
                <h4 style={{color : 'black'}}>will reveal the true value <br/> in exchange for− {zv}</h4>
            </div>

          </div>
          <div className='yes-no'>
                <h4>Purchase the true value from the information broker?</h4>
                <div className='yes-no-buttons'>
                        <div ></div>
                        <Button style={{margin : '10px'}}  variant="outline-primary" size="lg"
                        disabled={isButtonDisabled} onClick={this.yesClicked}     >Yes</Button>
                        <Button style={{margin : '10px'}} variant="outline-primary" size="lg"
                        disabled={isButtonDisabled} onClick={this.noClicked}  >No</Button>
                </div>
            </div>

        </div>
      </div>

    )

  };
}

export default Game;