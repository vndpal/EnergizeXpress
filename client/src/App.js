import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {
  useEffect(()=>{
      fetch('/test')
      .then(res=>res.json())
      .then((data)=>console.log(data));
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is health tracking application.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          EnergizeExpress
        </a>
      </header>
    </div>
  );
}

export default App;
