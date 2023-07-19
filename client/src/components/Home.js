import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const nav = useNavigate();
  const navigatetoregister = () => {
    nav("/register");
  };

  return (
    <>
      <div className="home">
        <h1>Welcome to EnergizeExpress</h1>
        <p>Track, Transform, Triumph: Your Fitness Journey Starts Here!</p>
        <button onClick={navigatetoregister} className="button">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Home;
