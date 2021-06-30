import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function IntroGame(props)
{

    const nextClicked = () => {
        window.location.href = `/game/${props.match.params.id}`;
    }

    return (

    <div className="container">
        <img className="photo" style={{marginLeft:'10%'}}  src={process.env.PUBLIC_URL + `/game-intro.png`} alt="logo" />
        <Button className="button-container"  variant="outline-primary" size="lg"
          onClick={nextClicked} >Next</Button>
      </div>
    )

}

export default IntroGame;