import React, { Component } from 'react';
import './yes.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "./../api-service";
import Matrix from './../Matrix';


export class Yes extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
        isParticipant: false, currentIndex: 1, question: {}, 
        x: 1 , y: 1, s:1, table:[1], soldFor:1, avg:1,
        t1c: 0, t2c: 0, t3c:0, t4c:0, t5c:0, t1s: 0, t2s: 0, t3s:0, t4s:0, t5s:0,
    }

    
  }


  loadData = () => 
  {
    API.passInstructions({id: Number(this.props.match.params.id)})
    .then(resp => this.setState({isParticipant: resp}))
    .catch(error => console.log(error))
    API.TrainingRound({id: Number(this.props.match.params.id)})
    .then(resp => this.setState({currentIndex: resp-1}))
    .catch(error => console.log(error))
    API.get_Yes({question: Number(this.props.match.params.question)})
    .then(resp => {
        const temp_zv = (resp.z * resp.voi).toFixed(2) 
        const tempTable = [[resp.v11, resp.v12, resp.v13, resp.v14, resp.v15, resp.v16, resp.v17],
                        [resp.v21, resp.v22, resp.v23, resp.v24, resp.v25, resp.v26, resp.v27],
                        [resp.v31, resp.v32, resp.v33, resp.v34, resp.v35, resp.v36, resp.v37],
                        [resp.v41, resp.v42, resp.v43, resp.v44, resp.v45, resp.v46, resp.v47],
                        [resp.v51, resp.v52, resp.v53, resp.v54, resp.v55, resp.v56, resp.v57]]
        this.setState({x: resp.x, y:resp.y, w:resp.w, s:resp.s, zv:temp_zv, table: tempTable,
           questionId: resp.id, soldFor: resp.sold_with, avg: resp.sold_without})
        })
    .catch(error => console.log(error))

    API.getBidders({id: Number(this.props.match.params.question)})
    .then(resp => {
      this.setState({ 
        t1c: resp.t1, t2c: resp.t2, t3c:resp.t3, t4c:resp.t4, t5c:resp.t5,
        t1s: resp.t1_bid, t2s: resp.t2_bid, t3s:resp.t3_bid, t4s:resp.t4_bid, t5s:resp.t5_bid})
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
    const {isParticipant, x, y, s, zv, w, table, currentIndex, soldFor, avg, t1c, t1s,
      t2c, t2s, t3c, t3s, t4c, t4s, t5c, t5s,} = this.state;

    if( !isParticipant)
        return (<h1>error</h1>)

    return(
      <div className="color">
        <div className="que-con" >
          <div className="yes-header" >
              <div className="bidders">

              </div>
              <div>
                <h1 style={{color : 'red'}}>Training</h1>
                <h2 style={{color : 'red'}}>Round {currentIndex}-summary</h2>
                <img  src={process.env.PUBLIC_URL + '/decided-yes.png'} alt="logo" />
                <div className="world">
                    <div></div>
                    <img className="img-training" src={process.env.PUBLIC_URL + '/yes.png'} alt="logo" />
                    <h1 style={{color : 'red', marginTop: '25px'}}>v{s}</h1>
                </div>
              </div>
              <Matrix size={10} x={x} y={y} table={table} />
          </div>
          <div className="yes-body">
            <div></div>
            <div>
              <img className="img-bidders-yes" src={process.env.PUBLIC_URL + '/bidders.png'} alt="logo" />
              <h4 style={{color : 'black'}}>number of bidders= {w}</h4>
            </div>
            <div>
              {t1c > 1 && <h1 style={{color : 'red'}}>t1 {"=>"} {t1c} bidders {"=>"} {t1c} bids for {t1s}$ </h1>}
              {t1c === 1 && <h1 style={{color : 'red'}}>t1 {"=>"} {t1c} bidder {"=>"} {t1c} bid for {t1s}$ </h1>}
              {t2c > 1 && <h1 style={{color : 'red'}}>t2 {"=>"} {t2c} bidders {"=>"} {t2c} bids for {t2s}$ </h1>}
              {t2c === 1 && <h1 style={{color : 'red'}}>t2 {"=>"} {t2c} bidder {"=>"} {t2c} bid for {t2s}$ </h1>}
              {t3c > 1 && <h1 style={{color : 'red'}}>t3 {"=>"} {t3c} bidders {"=>"} {t3c} bids for {t3s}$ </h1>}
              {t3c === 1 && <h1 style={{color : 'red'}}>t3 {"=>"} {t3c} bidder {"=>"} {t3c} bid for {t3s}$ </h1>}
              {t4c > 1 && <h1 style={{color : 'red'}}>t4 {"=>"} {t4c} bidders {"=>"} {t4c} bids for {t4s}$ </h1>}
              {t4c === 1 && <h1 style={{color : 'red'}}>t4 {"=>"} {t4c} bidder {"=>"} {t4c} bid for {t4s}$ </h1>}
              {t5c > 1 && <h1 style={{color : 'red'}}>t5 {"=>"} {t5c} bidders {"=>"} {t5c} bids for {t5s}$ </h1>}
              {t5c === 1 && <h1 style={{color : 'red'}}>t5 {"=>"} {t5c} bidder {"=>"} {t5c} bid for {t5s}$ </h1>}

            </div>

          </div>
          <div className='yes-foot'>

            <div>
              <img className="img-info-yes" src={process.env.PUBLIC_URL + '/info.png'} alt="logo" />
              <h4 style={{color : 'black'}}>fee= {zv}$</h4>
            </div>
            <div>
              <h4 style={{color : 'white', backgroundColor: '#2d6ad5', border: '2px solid black',
               paddingBottom:'15px', paddingTop:'15px'}}>
                 Prize collected: {Number(soldFor)}-{parseFloat(avg).toFixed(1)}-{zv}=
                 {(Number(soldFor)-parseFloat(avg).toFixed(1)-zv).toFixed(1)}$</h4>
              <div className="sold-for">
                <h1 style={{color : 'red'}}>sold for {parseFloat(avg).toFixed(1)}$</h1>
                <img className="img-dolar" src={process.env.PUBLIC_URL + '/dolar.png'} alt="logo" />
              </div>
              <div className="avg">
                <img className="img-avg" src={process.env.PUBLIC_URL + '/avg.png'} alt="logo" />
                <h1 style={{color : 'red'}}>= {parseFloat(avg).toFixed(1)}$</h1>
              </div>
            </div>
            <div style={{marginTop: '120px'}}>
              <Button width="20px" className="button-container"  variant="outline-primary" size="lg"
              onClick={this.nextClicked} >Next round</Button>
              { currentIndex > 1 && <Button width="20px" className="button-container"  variant="outline-primary" size="lg"
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