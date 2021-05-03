import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './Forms.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Det()
 {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
      setValue(value)
    }

    const continueClicked = () => 
    {
        window.location.href = '/description';
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
                            <option value="error">-Please select your education-</option>
                            <option value="Some High School">Some High School</option>
                            <option value="High School">High School</option>
                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="Master's Degree">Master's Degree</option>
                            <option value="Ph.D. or higher">Ph.D. or higher</option>
                        </select>
                    </form>
                    <h6>Nationality</h6>
                    <form style={{width : '300px', marginLeft : '10px'}}>
                        <Select placeholder="-Please select your Nationality-" options={options} value={value} onChange={changeHandler} />
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



