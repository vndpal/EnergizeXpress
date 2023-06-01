import './App.css';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import { Route,Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import WeightLog from './components/WeightLog';
import WorkouttLog from './components/WorkoutLog';
import Register from './components/Register';

function App() {
  useEffect(()=>{
      fetch('/test')
      .then(res=>res.json())
      .then((data)=>console.log(data));
  },[])
  return (
    <>
    <div className='menubar'>
    <Navbar />
    </div>
     
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/register' Component={Register} />
      <Route path='/aboutus' Component={AboutUs} />
      <Route path='/contactus' Component={ContactUs} />
      <Route path='/weight' Component={WeightLog} />
      <Route path='/workout' Component={WorkouttLog} />
      </Routes>
    </>
  );
}

export default App;
