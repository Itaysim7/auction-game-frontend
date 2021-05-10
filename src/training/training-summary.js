import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../summary-quiz/Summary-quiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "./../api-service";


export class trainingSummary extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
        round:1
    }
  }

  loadData = () => 
  {
    API.TrainingRound({id: Number(this.props.match.params.id)})
    .then(resp => this.setState({round: resp}))
    .catch(error => console.log(error))
  }

  nextClicked = () => {
    window.location.href = `/intro-game/${this.props.match.params.id}`;
  }
  componentDidMount(){
    this.loadData();
  }
 

  render ()
  {
    const {round} = this.state;

    return(
        <div className="color">
          <div className="result" style= {{width:"50%", marginLeft:"25%"}}>
            <h1 style= {{color:"red"}}>Training-summary</h1>
            <h2 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px',marginTop:'50px'}}> Rounds: {round-1}</h2>

            <Button className="button-container"  variant="outline-primary" size="lg"
                onClick={this.nextClicked} >Next</Button>
          </div>
        </div>
        )
      
  };
}


export default trainingSummary;