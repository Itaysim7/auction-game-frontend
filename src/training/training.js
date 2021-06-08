import React, { Component } from 'react';
import './training.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { API } from "./../api-service";
import Matrix from './../Matrix';
import { Alert } from 'reactstrap';

var time = null
var partid = 1;
const renderTime = ({ remainingTime,elapsedTime }) => {
  time = elapsedTime
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

export class Trainig extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      isParticipant: true, currentIndex: 1, questionId: 1, bonus:0, visible : false,
      x:1 , y:1, w:1, zv:1, table : [-1], isButtonDisabled: true, points: 0
    }
  }

  yesClicked = async () =>
  {
    const {questionId, currentIndex, points, zv} = this.state;
    API.postAnswer({'id': this.props.match.params.id, 'score':points,'zv':zv, 'yes_no':true,
    'round': currentIndex+1, 'question':questionId, 'time':time})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.href = `/yes/${this.props.match.params.id}/${questionId}`;
  }
  noClicked  = async () =>
  {
    const {questionId, currentIndex} = this.state;
    API.postAnswer({'id': this.props.match.params.id, 'score':0, 'zv':0, 'yes_no':false,
    'round': currentIndex+1, 'question':questionId, 'time':time})
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.href = `/no/${this.props.match.params.id}/${questionId}`;
  }

  loadData = () => 
  {
    partid=this.props.match.params.id;
    API.passInstructions({id: this.props.match.params.id})
    .then(resp => this.setState({isParticipant: resp}))
    .catch(error => console.log(error))

    API.get_training({id: this.props.match.params.id})
        .then(resp => {
            const temp_zv = (resp.z * resp.voi).toFixed(2) 
            const temp_points = (Number(resp.sold_with)-parseFloat(resp.sold_without).toFixed(1)-(resp.z * resp.voi).toFixed(2)).toFixed(1)
            const tempTable = [[resp.v11, resp.v12, resp.v13, resp.v14, resp.v15, resp.v16, resp.v17],
                            [resp.v21, resp.v22, resp.v23, resp.v24, resp.v25, resp.v26, resp.v27],
                            [resp.v31, resp.v32, resp.v33, resp.v34, resp.v35, resp.v36, resp.v37],
                            [resp.v41, resp.v42, resp.v43, resp.v44, resp.v45, resp.v46, resp.v47],
                            [resp.v51, resp.v52, resp.v53, resp.v54, resp.v55, resp.v56, resp.v57]]
            this.setState({points: temp_points, currentIndex: resp.round, bonus:resp.bonus, x: resp.x, y:resp.y, w:resp.w, zv:temp_zv, table: tempTable, questionId: resp.id})  
          })
    .catch(error => console.log(error))
    setTimeout(() => this.setState({ isButtonDisabled: false }), 10000);
    setTimeout(() => {this.setState({visible:true},()=>{
      window.setTimeout(()=>{
        this.setState({visible:false})
      },180000)
    });},180000);

  }

  componentDidMount(){
    this.loadData();
  }

  render ()
  {
    const {isParticipant, x, y, w, zv, table, currentIndex, bonus, isButtonDisabled} = this.state;

    if( !isParticipant)
    {
      setTimeout(() => window.location.href = `/`, 10000);
      return (<h1 style={{margin: '20%'}}>You can no longer participate in the experiment, window will close in 5 seconds</h1>)
    }
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
                <h1 style={{color : 'red'}}>Training</h1>
                <h2 style={{color : 'red'}}>Round {currentIndex+1}</h2>
                <Alert color="info" isOpen={this.state.visible} >
                     3 minutes passed !!!
                </Alert>
                <img className="img-training" src={process.env.PUBLIC_URL + '/Img.png'} alt="logo" />
              </div>
              <div>
                <h5 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
                 paddingBottom:'5px', paddingTop:'5px',marginTop:'20px'}}> Rounds:{currentIndex} </h5>
                <h5 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
                 paddingBottom:'5px', paddingTop:'5px',marginTop:'10px'}}> Your points:{(bonus*10).toFixed(2)}</h5>
                <h5 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
                 paddingBottom:'5px', paddingTop:'5px',marginTop:'10px'}}> Bonus:{bonus}¢ </h5>
              </div>
          </div>
          <div className="training-body">

            <div className="bidders">
                { w === 4  && <img className="img-bidders" src={process.env.PUBLIC_URL + `/4bidders.png`} alt="logo" />}
                { w === 5  && <img className="img-bidders" src={process.env.PUBLIC_URL + `/5bidders.png`} alt="logo" />}
                { w === 6  && <img className="img-bidders" src={process.env.PUBLIC_URL + `/6bidders.png`} alt="logo" />}
                { w === 7  && <img className="img-bidders" src={process.env.PUBLIC_URL + `/7bidders.png`} alt="logo" />}
                { w === 8  && <img className="img-bidders" src={process.env.PUBLIC_URL + `/8bidders.png`} alt="logo" />}
                <h2 style={{color : 'black'}}>number of bidders= {w}</h2>
            </div>
            <Matrix size={40} x={x} y={y} table={table} />
            <div className="bidders">
                <img className="img-info" src={process.env.PUBLIC_URL + '/info.png'} alt="logo" />
                <h5 style={{color : 'black'}}>true value revealing price− {zv}$</h5>
            </div>

          </div>
          <div className='yes-no'>
                <h4>Are you interested buying the information from the<br/> information provider?</h4>
                <div className='yes-no-buttons'>
                        <div ></div>
                        <Button style={{margin : '10px'}}  variant="outline-primary" size="lg"
                        disabled={isButtonDisabled} onClick={this.yesClicked} >Yes</Button>
                        <Button style={{margin : '10px'}} variant="outline-primary" size="lg"
                        disabled={isButtonDisabled} onClick={this.noClicked} >No</Button>
                </div>
            </div>


       
        </div>
      </div>

    )

  };
}

export default Trainig;