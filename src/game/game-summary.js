import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../summary-quiz/Summary-quiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "./../api-service";


export class gameSummary extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      round:1, bonus:0
    }
  }

  loadData = () => 
  {
    API.getGameSummary({id: this.props.match.params.id})
    .then(resp => {
      this.setState({round: resp.round, bonus:resp.bonus})
    })
    .catch(error => console.log(error))
  }

  nextClicked = () => {
    window.location.href = `/survey/${this.props.match.params.id}`;
  }
  componentDidMount(){
    this.loadData();
  }
 

  render ()
  {
    const {round, bonus} = this.state;

    return(
        <div className="color">
          <div className="result" style= {{width:"50%", marginLeft:"25%"}}>
            <h1 style= {{color:"red"}}>Game-summary</h1>
            <h2 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px',marginTop:'50px'}}> Rounds: {round-1}</h2>
            <h2 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px',marginTop:'20px'}}> Your point: {bonus*10}</h2>
            <h2 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px',marginTop:'20px'}}> Bonus: {bonus}$</h2>
         
            <h2 style={{color : 'white', backgroundColor: 'green', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px',marginTop:'75px'}}>
                  Press "Continue" in order to get your bonus</h2>

            <Button className="button-container"  variant="outline-primary" size="lg"
                onClick={this.nextClicked} >Continue</Button>
          </div>
        </div>
        )
      
  };
}


export default gameSummary;
