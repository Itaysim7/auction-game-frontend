import React from 'react';
import './Forms.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Det()
 {

    const continueClicked = () => 
    {
        window.location.href = '/';
    }

  return (
    <div>
        <div className='container-forms'>
            <div className='layout'>
                <h3>Please fill in a few details before we start</h3>
                <div className='fill-in'>
                    <h6>Age</h6>
                    <form >
                        <input className="age" type="number"  min="18" max="100" placeholder="-Please enter your age-"/>
                    </form>
                    <h6>Gender</h6>
                    <form >
                        <select id="gender" name="gender">
                            <option value>-Please select your gender-</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </form>
                    <h6>Education</h6>
                    <form >
                        <select id="education" name="education">
                            <option value>-Please select your education-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </form>
                    <h6>Nationality</h6>
                    <form >
                        <select id="nationality" name="nationality">
                            <option value>-Please select your nationality-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
        <Button className="button-container"  variant="outline-primary" size="lg"
          onClick={continueClicked} >Continue</Button>
    </div>
    
    
  );
}

export default Det;



