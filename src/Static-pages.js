import React, {useState} from 'react';
import './Static-pages.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Desc(props)
{
    const [page, setPage] = useState(2);

    const nextClicked = () => {
        if(page>=18)
            window.location.href = '/summary-quiz';
        else
            setPage(page+1);
    }
    const previousClicked = () => {
        if(page>2)
            setPage(page-1);
    }

    return (

    <div className="container">
        <img className="photo" src={process.env.PUBLIC_URL + `./${page}.png`} alt="logo" />
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