import './App.css';
import React, { useState } from 'react';
import {API} from './api-service'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [worker, setWorkert] = useState('')
  
  const setQ4 = (event) => {
    setWorkert(event.target.value)
  }

  const nextClicked = () => {
    if(worker !== '')
    {
      API.addParticipant({id: worker})
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
      window.location.href = `/description/${worker}`;
    }
    else
      alert("Please enter your Worker ID to continue")
  }


  return (
    <div className="App">
      <div className="container">
        <img className="photo" src={process.env.PUBLIC_URL + './1.png'} alt="logo" />
        <div className='layout' style={{marginLeft: '300px', marginBottom:'20px'}}>
                <h3 style={{marginLeft: '8px'}}>Please enter your Worker ID to continue</h3>
                <div className='fill-in' >
                    <form >
                    <textarea onChange={setQ4.bind(this)} style={{ marginLeft: '25%',marginTop:'10px', marginBottom: '1px'}} id="story" name="story" rows="1" cols="33"></textarea>
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
