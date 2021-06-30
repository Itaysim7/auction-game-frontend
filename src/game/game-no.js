import React, { Component } from 'react';
import '../training/yes.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "./../api-service";

export class GameNo extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
        isParticipant: true, currentIndex: 1, question: {}, avg:1
          }
  }

  loadData = () => 
  {
    API.passInstructions({id: this.props.match.params.id})
    .then(resp => this.setState({isParticipant: resp}))
    .catch(error => console.log(error))
    API.TrainingRoundGame({id: this.props.match.params.id})
    .then(resp => this.setState({currentIndex: resp-1}))
    .catch(error => console.log(error))
    API.get_No({question: Number(this.props.match.params.question)})
    .then(resp => {
         this.setState({questionId: resp.id, avg: resp.sold_without})
        })
    .catch(error => console.log(error))

  }

  componentDidMount(){
      this.loadData()
  }
  nextClicked = () => {
    window.location.href = `/game/${this.props.match.params.id}`;
  }
  endClicked = () => {
    window.location.href = `/game-summary/${this.props.match.params.id}`;
  }

  render ()
  {
    const {isParticipant, currentIndex, avg} = this.state;

    if( !isParticipant)
    {
      setTimeout(() => window.location.href = `/`, 10000);
      return (<h1 style={{margin: '20%'}}>You can no longer participate in the experiment, window will close in 5 seconds</h1>)
    }
    return(
      <div className="color">
        <div className="que-con" >
          <div className="temp">
            <h1 style={{color : 'bkack'}}>The Mysterious Auction Game</h1>
            <h2 style={{color : 'red'}}>Round {currentIndex+1}-summary</h2>
            <h4 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
             paddingBottom:'1%', paddingTop:'1%'}}>
              You decided not to buy the true value</h4>
              <div className="worldd">
                <img className="img-trainingg" src={process.env.PUBLIC_URL + '/yes.png'} alt="logo" />
                <h1 style={{color : 'red', marginTop: '25px'}}>?</h1>
              </div>
              <div className="worldd">
                <h1 style={{color : 'red', marginTop:'30px'}}>sold for {parseFloat(avg).toFixed(1)}$</h1>
                <img className="img-dolar" src={process.env.PUBLIC_URL + '/dolar.png'} alt="logo" />
              </div>
              <div className="worldd">
                <img className="img-avg" src={process.env.PUBLIC_URL + '/avg.png'} alt="logo" />
                <h1 style={{color : 'red'}}>= {parseFloat(avg).toFixed(1)}$</h1>
              </div>
              <h4 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px'}}>
                 Prize collected: {parseFloat(avg).toFixed(1)}-{parseFloat(avg).toFixed(1)}-0=0$</h4>
              <div className="buttons-container">
              {currentIndex <= 18 &&<Button width="20px" className="button-container"  variant="outline-primary" size="lg"
              onClick={this.nextClicked} >Next round</Button>}
              { currentIndex > 18 && <Button width="20px" className="button-container"  variant="outline-primary" size="lg"
              onClick={this.endClicked} >End game</Button>
              }
            </div>
          </div>
        </div>
      </div>
    )

  };
}

export default GameNo;