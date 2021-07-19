import React, {useState} from 'react';
import './Static-pages.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "@ramonak/react-progress-bar";


function Desc(props)
{
    const [page, setPage] = useState(1);

    const nextClicked = () => {
        if(page>=18)
            window.location.href = `/forms/${props.match.params.id}`;
        else
            setPage(page+1);
    }
    const previousClicked = () => {
        if(page>1)
            setPage(page-1);
    }


    return (

    <div className="container">
        <img style={{ marginLeft: '15%'}} className="photo" src={process.env.PUBLIC_URL + `/${page}.png`} alt="logo" />
        <div style={{marginLeft: '30%', marginTop: '50px'}}>
            <h6 style={{ color: 'blue'}}>Introduction progress bar</h6>
            <ProgressBar labelAlignment="oucetside" height="50%"  labelSize="18px" bgColor="blue" width="50%"  completed={Math.floor(((page-1)/17)*100)} />
        </div>
        <div className="buttons-container">
            {page>1 && <Button className="previous"  variant="outline-primary" size="lg"
                onClick={previousClicked} >Previous</Button>}
            <Button className="next"  variant="outline-primary" size="lg"
                onClick={nextClicked} >Next</Button>
        </div>
      </div>
    )

}

export default Desc;