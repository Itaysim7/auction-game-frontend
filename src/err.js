import 'bootstrap/dist/css/bootstrap.min.css';


function Err(props)
{

    setTimeout(() => window.location.href = `/`, 10000);
    return (<h1 style={{margin: '20%'}}>You can no longer participate in the experiment, window will close in 5 seconds</h1>)

}

export default Err;