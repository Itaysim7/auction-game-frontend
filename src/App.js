import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const nextClicked = () => {
    window.location.href = '/forms';
  }


  return (
    <div className="App">
      <div className="container">
        <img className="photo" src={process.env.PUBLIC_URL + './1.png'} alt="logo" />
        <Button className="button-container"  variant="outline-primary" size="lg"
          onClick={nextClicked} >Next</Button>
      </div>
    </div>
  );
}

export default App;
