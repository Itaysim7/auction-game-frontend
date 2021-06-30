import React, {useState} from 'react';
import './survey.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SurveyData} from './survey-data'
import { API } from '../api-service';


function Survey(props)
 {
    const [q1, setQ1state] = useState('')
    const [q2, setQ2state] = useState('')
    const [q3, setQ3state] = useState('')
    const [q4, setQ4state] = useState('')
    const [q5, setQ5state] = useState('')
    const[payed, setPayed] = useState(false)

    const setQ1 = (event) => {
        setQ1state(event.target.value);
    }
    const setQ2 = (event) => {
        setQ2state(event.target.value);
    }
    const setQ3 = (event) => {
        setQ3state(event.target.value);
    }
    const setQ4 = (event) => {
        setQ4state(event.target.value);
    }
    const setQ5 = (event) => {
        setQ5state(event.target.value);
    }
    const submitClicked = () => 
    {
        if(q1 === '' || q2 === '' || q3 === ''|| q4 === ''|| q5 === ''  )
        {
            alert("You need to fill in all the fields")
        }
        else
        {
            API.addSurvey({ id: props.match.params.id, q1: q1, q2: q2, q3: q3, q4: q4, q5: q5  })
           .then(resp => console.log(resp))
           .catch(error => console.log(error))
           API.setPayed({ id: props.match.params.id})
           .then(resp => setPayed(resp))
           .catch(error => console.log(error))
        }
    }
    
    if(payed)
    {
        return(<h1 style={{marginTop:'15%', marginLeft:'30%', color:'red'}}>Thank you for your participation <br>
        </br> assignmentId: 1289 </h1>
        )
    }
    else 
    {
        return (
            <div>
                <div className='container-survey'>
                    <div className='layout-survey'>
                        <h3 style={{textAlign : 'center'}}>Please answer this short survey</h3>
                        <div className='fill-in'>
                            <div key={SurveyData[0].id}>
                                <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>{SurveyData[0].question}</h5>
                                <div className="survey-radio" >
                                    <input type="radio" value={SurveyData[0].options[0]} name={SurveyData[0].options[0]} checked={q1 === SurveyData[0].options[0] } onChange={setQ1.bind(this)}  /> {SurveyData[0].options[0]}<br/>
                                    <input type="radio" value={SurveyData[0].options[1]} name={SurveyData[0].options[1]} checked={q1 === SurveyData[0].options[1] } onChange={setQ1.bind(this)}/> {SurveyData[0].options[1]} <br/>
                                    <input type="radio" value={SurveyData[0].options[2]} name={SurveyData[0].options[2]} checked={q1 === SurveyData[0].options[2] } onChange={setQ1.bind(this)} /> {SurveyData[0].options[2]} <br/>
                                    <input type="radio" value={SurveyData[0].options[3]} name={SurveyData[0].options[3]} checked={q1 === SurveyData[0].options[3] } onChange={setQ1.bind(this)} /> {SurveyData[0].options[3]}
                                </div>
                            </div>
                            <div key={SurveyData[1].id}>
                                <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>{SurveyData[1].question}</h5>
                                <div className="survey-radio">
                                    <input type="radio" value={SurveyData[1].options[0]} name={SurveyData[1].options[0]} checked={q2 === SurveyData[1].options[0] } onChange={setQ2.bind(this)}/> {SurveyData[1].options[0]}<br/>
                                    <input type="radio" value={SurveyData[1].options[1]} name={SurveyData[1].options[1]} checked={q2 === SurveyData[1].options[1] } onChange={setQ2.bind(this)}/> {SurveyData[1].options[1]}<br/>
                                    <input type="radio" value={SurveyData[1].options[2]} name={SurveyData[1].options[2]} checked={q2 === SurveyData[1].options[2] } onChange={setQ2.bind(this)}/> {SurveyData[1].options[2]}
                                </div>
                            </div>
                            <div key={SurveyData[2].id}>
                                <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>{SurveyData[2].question}</h5>
                                <div className="survey-radio">
                                    <input type="radio" value={SurveyData[2].options[0]} name={SurveyData[2].options[0]} checked={q3 === SurveyData[2].options[0] } onChange={setQ3.bind(this)}/> {SurveyData[2].options[0]}<br/>
                                    <input type="radio" value={SurveyData[2].options[1]} name={SurveyData[2].options[1]} checked={q3 === SurveyData[2].options[1] } onChange={setQ3.bind(this)} /> {SurveyData[2].options[1]}<br/>
                                    <input type="radio" value={SurveyData[2].options[2]} name={SurveyData[2].options[2]} checked={q3 === SurveyData[2].options[2] } onChange={setQ3.bind(this)} /> {SurveyData[2].options[2]}
                                </div>
                            </div>
                            <div key={SurveyData[3].id}>
                                <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>{SurveyData[3].question}</h5>
                                <div className="survey-radio">
                                    <input type="radio" value={SurveyData[3].options[0]} name={SurveyData[3].options[0]} checked={q5 === SurveyData[3].options[0] } onChange={setQ5.bind(this)}/> {SurveyData[3].options[0]}<br/>
                                    <input type="radio" value={SurveyData[3].options[1]} name={SurveyData[3].options[1]} checked={q5 === SurveyData[3].options[1] } onChange={setQ5.bind(this)} /> {SurveyData[3].options[1]}<br/>
                                    <input type="radio" value={SurveyData[3].options[2]} name={SurveyData[3].options[2]} checked={q5 === SurveyData[3].options[2] } onChange={setQ5.bind(this)} /> {SurveyData[3].options[2]}
                                </div>
                            </div>
        
                            <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>Do you have any comments?</h5>
                            <textarea onChange={setQ4.bind(this)} style={{ marginLeft: '3%'}} id="story" name="story" rows="5" cols="33"></textarea>
                        </div>
                    </div>
                </div>
                <Button className="button-container"  variant="outline-primary" size="lg"
                  onClick={submitClicked} >Submit Hit</Button>
            </div>
          );

    }

  
}

export default Survey;



