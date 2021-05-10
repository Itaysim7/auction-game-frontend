import React, {useState} from 'react';
import './Static-pages.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "@ramonak/react-progress-bar";


function Desc(props)
{
    const [page, setPage] = useState(2);

    const nextClicked = () => {
        if(page>=18)
            window.location.href = '/forms';
        else
            setPage(page+1);
    }
    const previousClicked = () => {
        if(page>2)
            setPage(page-1);
    }


    return (

    <div className="container">
        <h5 style={{marginTop : '10px', marginLeft: '120px', color: 'blue'}}>{page-1} of 17</h5>
        <h6 style={{ marginLeft: '60px', color: 'blue'}}>Introduction progress bar</h6>
        <ProgressBar labelSize="10px" bgColor="blue" width="30%"  completed={Math.floor(((page-1)/17)*100)} />;
        <img style={{ marginLeft: '130px'}} className="photo" src={process.env.PUBLIC_URL + `/${page}.png`} alt="logo" />
        <div className="buttons-container">
            {page>2 && <Button className="previous"  variant="outline-primary" size="lg"
                onClick={previousClicked} >Previous</Button>}
            <Button className="next"  variant="outline-primary" size="lg"
                onClick={nextClicked} >Next</Button>
        </div>
      </div>
    )

}

export default Desc;