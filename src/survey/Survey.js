import React from 'react';
import './survey.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SurveyData} from './survey-data'



function Survey()
 {

    const submitClicked = () => 
    {
        window.location.href = '/';
    }

  return (
    <div>
        <div className='container-survey'>
            <div className='layout'>
                <h3 style={{textAlign : 'center'}}>Please answer this short survey</h3>
                <div className='fill-in'>
                    {SurveyData.map(question =>
                        <div key={question.id}>
                            <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>{question.question}</h5>
                            {question.options.map(opt =>
                                <div className="survey-radio">
                                    <input type="radio" value={opt} name={question.id} /> {opt}
                                </div>
                            )}
                        </div>
                    )}
                    <h5 style={{color : 'orange', marginBottom : '10px', marginLeft: '10px'}}>Do you have any comments?</h5>
                    <textarea style={{ marginLeft: '3%'}} id="story" name="story" rows="5" cols="33"></textarea>
                </div>
            </div>
        </div>
        <Button className="button-container"  variant="outline-primary" size="lg"
          onClick={submitClicked} >Submit Hit</Button>
    </div>
    
    
  );
}

export default Survey;



