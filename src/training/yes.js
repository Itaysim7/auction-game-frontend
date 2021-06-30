import React, { Component } from 'react';
import './yes.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "./../api-service";


export class Yes extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
        isParticipant: true, currentIndex: 1, question: {}, s:1, soldFor:1, avg:1
    }

    
  }


  loadData = () => 
  {
    API.passInstructions({id: this.props.match.params.id})
    .then(resp => this.setState({isParticipant: resp}))
    .catch(error => console.log(error))
    API.TrainingRound({id: this.props.match.params.id})
    .then(resp => this.setState({currentIndex: resp-1}))
    .catch(error => console.log(error))
    API.get_Yes({question: Number(this.props.match.params.question)})
    .then(resp => {
        const temp_zv = (resp.z * resp.voi).toFixed(2) 
        this.setState({s:resp.s, zv:temp_zv,
           questionId: resp.id, soldFor: resp.sold_with, avg: resp.sold_without})
        })
    .catch(error => console.log(error))

  }

  componentDidMount(){
      this.loadData()
  }
  nextClicked = () => {
    window.location.href = `/training/${this.props.match.params.id}`;
  }
  endClicked = () => {
    window.location.href = `/training-summary/${this.props.match.params.id}`;
  }


  render ()
  {
    const {isParticipant, s, zv, currentIndex, soldFor, avg} = this.state;

    if( !isParticipant)
    {
      setTimeout(() => window.location.href = `/`, 10000);
      return (<h1 style={{margin: '20%'}}>You can no longer participate in the experiment, window will close in 5 seconds</h1>)
    }

    return(
      <div className="color">
        <div className="que-con" >
          <div className="temp">
              <h1 style={{color : 'red'}}>Training</h1>
              <h2 style={{color : 'red'}}>Round {currentIndex+1}-summary</h2>
              <h4 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'1%', paddingTop:'1%'}}>You decided to buy the true value for {zv}$</h4>
               <div className="worldd">
                <img className="img-trainingg" src={process.env.PUBLIC_URL + '/yes.png'} alt="logo" />
                <h1 style={{color : 'red', marginTop: '10%'}}>v{s}</h1>
               </div>
               <div className="worldd">
                  <h1 style={{color : 'red'}}>sold for {parseFloat(soldFor).toFixed(1)}$ !</h1>
                  <img className="img-dolar" src={process.env.PUBLIC_URL + '/dolar.png'} alt="logo" />
              </div>
              <div className="worldd">
                  <img className="img-avg" src={process.env.PUBLIC_URL + '/avg.png'} alt="logo" />
                  <h1 style={{color : 'red'}}>= {parseFloat(avg).toFixed(1)}$</h1>
              </div>
              <h4 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'1%', paddingTop:'1%'}}>
                 Prize collected: {Number(soldFor)}-{parseFloat(avg).toFixed(1)}-{zv}=
                 {(Number(soldFor)-parseFloat(avg).toFixed(1)-zv).toFixed(1)}$</h4>
              <div className="buttons-container">
                <Button style={{marginBottom:'25px'}} width="20px" className="next"  variant="outline-primary" size="lg"
                onClick={this.nextClicked} >Next</Button>
                { currentIndex > 0 && <Button width="20px" className="previous"  variant="outline-primary" size="lg"
                onClick={this.endClicked} >End training</Button>
                }
              </div>
          </div>
        </div>
      </div>

    )

  };
}

export default Yes;