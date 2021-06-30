import React, { useState, useMemo, useEffect} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './Forms.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './api-service';


function Det(props)
 {
    const [participantId, setParticipantId] = useState('')
    const [value_nat, setValue_nat] = useState({value: "US", label: "United States"})
    const [value_gender, setValue_gender] = useState('')
    const [value_edu, setValue_edu] = useState('')
    const [value_age, setValue_age] = useState('')
    
    useEffect(() =>
     {
        if(participantId !== '')
            window.location.href = `/summary-quiz/${participantId}`;
    }, [participantId])

    const options = useMemo(() => countryList().getData(), [])
    const options_gender = [{ value: "Male", label: "Male" },{ value: "Female", label: "Female" }];
    const options_edu = [{ value: "Some High School", label: "Some High School" },{ value: "High School", label: "High School" },
    { value: "Bachelor's Degree", label: "Bachelor's Degree" },{ value: "Master's Degree", label: "Master's Degree" },
    { value: "Ph.D. or higher", label: "Ph.D. or higher" }];

    const changeHandlerNat = value => {
        console.log(value)
        setValue_nat(value)
    }
    const changeHandlerGender = e => {
        setValue_gender(e.value)
    }
    const changeHandlerEdu = e => {
        setValue_edu(e.value)
    }
    const changeHandlerAge = e => {
        setValue_age(e.target.value)
    }

    const continueClicked = () => 
    {
        if(value_age === '' || value_edu === '' || value_gender === ''|| value_nat === '' )
            alert("You need to fill in all the fields")
        else if(value_age < 18)
            alert("The minimum age is 18")
        else
        {
            API.filedsParticipant({id: props.match.params.id, age: value_age, gender: value_gender,
                 nationality: value_nat.value, education: value_edu })
            .then(resp => setParticipantId(resp))
            .catch(error => console.log(error))
        }
    }

  return (
    <div>
        <div className='container-forms'>
            <div className='layout-forms'>
                <h3 style={{marginLeft: '8px'}}>Please fill in a few details before we start</h3>
                <div className='fill-in'>
                    <h6>Age</h6>
                    <form >
                        <input className="age" type="number"  min="18" max="100"
                        value={value_age} onChange={changeHandlerAge} placeholder="-Please enter your age-"/>
                    </form>
                    <h6>Gender</h6>
                    <form style={{width : '300px', marginLeft : '10px'}}>
                        <Select options={options_gender} onChange={changeHandlerGender}
                        placeholder="-Please select your gender-" value={options_gender.filter(function(option) {
                            return option.value === value_gender;})} />
                    </form>
                    <h6>Education</h6>
                    <form style={{width : '300px', marginLeft : '10px'}}>
                        <Select options={options_edu} onChange={changeHandlerEdu}
                        placeholder="-Please select your education-" value={options_edu.filter(function(option) {
                            return option.value === value_edu;})} />
                    </form>
                    <h6>Nationality</h6>
                    <form style={{width : '300px', marginLeft : '10px'}}>
                        <Select placeholder="-Please select your Nationality-" options={options} value={value_nat}
                         onChange={changeHandlerNat} />
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



