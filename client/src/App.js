import './App.css';
import {useEffect} from 'react';
import Navbar from './components/Navbar';

function App() {
  useEffect(()=>{
      fetch('/test')
      .then(res=>res.json())
      .then((data)=>console.log(data));
  },[])
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
