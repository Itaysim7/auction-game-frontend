import './App.css';
import React, { useState, useEffect } from 'react';
import {API} from './api-service'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [worker, setWorkert] = useState('')
  
  useEffect(() => {
    API.wakeUp()
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
  }, []);
  
  const setQ4 = (event) => {
    setWorkert(event.target.value)
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const nextClicked = async () => {
    if(worker !== '')
    {
      API.addParticipant({id: worker})
      .then(resp => {
        if(resp === 'You can no longer participate in the experiment')
          alert(resp)
        else
          window.location.href = `/description/${worker}`;
      })
      .catch(error => console.log(error))
      await sleep(500);
    }
    else
      alert("Please enter your Worker ID to continue")
  }


  return (
    <div className="App">
      <div className="container-intro">
        <img className="photo" src={process.env.PUBLIC_URL + './0.png'} alt="logo" />
        <div className='layout-intro'>
          <h3 style={{marginLeft: '8px'}}>Please enter your Worker ID to continue</h3>
            <div className='fill-in-intro' >
              <form >
                <textarea onChange={setQ4.bind(this)} style={{ marginLeft: '25%',marginTop:'10px', marginBottom: '1px'}} id="story" name="story" rows="1" cols="25"></textarea>
                    </form>
            </div>
        </div>
        <Button className="button-container"  variant="outline-primary" size="lg"
          onClick={nextClicked} >Next</Button>
      </div>
    </div>
  );
}

export default App;
