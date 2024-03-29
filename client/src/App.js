import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import WeightLog from "./components/WeightLog";
import WorkouttLog from "./components/WorkoutLog";
import Register from "./components/Register";
import WeeklyWorkoutProgram from "./components/WeeklyWorkoutProgram";
import LoginForm from "./components/Login";

function App() {
  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="menubar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/register" Component={Register} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/weight" Component={WeightLog} />
        <Route path="/workout" Component={WorkouttLog} />
        <Route path="/program" Component={WeeklyWorkoutProgram} />
      </Routes>
    </>
  );
}

export default App;
