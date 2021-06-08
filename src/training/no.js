import React, { Component } from 'react';
import './yes.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "./../api-service";


export class No extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
        isParticipant: true, currentIndex: 1, question: {}, avg:1,
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
    API.get_No({question: Number(this.props.match.params.question)})
    .then(resp => {
        this.setState({  questionId: resp.id, avg: resp.sold_without})
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
    const {isParticipant, currentIndex, avg} = this.state;

    if( !isParticipant)
    {
      setTimeout(() => window.location.href = `/`, 10000);
      return (<h1 style={{margin: '20%'}}>You can no longer participate in the experiment, window will close in 5 seconds</h1>)
    }

    return(
      <div className="color">
        <div className="que-con" >
          <div className="yes-header" >
              <div className="bidders">

              </div>
              <div>
                <h1 style={{color : 'red'}}>Training</h1>
                <h2 style={{color : 'red'}}>Round {currentIndex+1}-summary</h2>
                <img  src={process.env.PUBLIC_URL + '/decided-no.png'} alt="logo" />
              </div>
          </div>
          <div className="yes-body">
            <div></div>
            <div>
              <div className="world" style={{marginLeft:'150px'}}>
                  <img className="img-training" src={process.env.PUBLIC_URL + '/yes.png'} alt="logo" />
                  <h1 style={{color : 'red', marginTop: '25px'}}>?</h1>
                  <div></div>
              </div>
              <div className="sold-for">
                <h1 style={{color : 'red', marginTop:'30px'}}>sold for {parseFloat(avg).toFixed(1)}$ !</h1>
                <img className="img-dolar" src={process.env.PUBLIC_URL + '/dolar.png'} alt="logo" />
              </div>
              <div className="avg">
                  <img className="img-avg" src={process.env.PUBLIC_URL + '/avg.png'} alt="logo" />
                  <h1 style={{color : 'red'}}>= {parseFloat(avg).toFixed(1)}$</h1>
              </div>
            </div>

          </div>
          <div className='yes-foot'>

            <div></div>
            <div>
              <h4 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px'}}>
                 Prize collected: {parseFloat(avg).toFixed(1)}-{parseFloat(avg).toFixed(1)}-0=0$</h4>
            </div>
          </div>
          <div className="buttons-container">
              <Button style={{marginBottom:'25px'}} width="20px" className="next"  variant="outline-primary" size="lg"
              onClick={this.nextClicked} >Next</Button>
              { currentIndex > 0 && <Button width="20px" className="previous"  variant="outline-primary" size="lg"
              onClick={this.endClicked} >End training</Button>
              }
          </div>
        </div>
      </div>

    )

  };
}

export default No;