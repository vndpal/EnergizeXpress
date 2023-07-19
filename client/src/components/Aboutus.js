import aboutImage from "../images/signup.jpg";
import "./Aboutus.css";

const AboutUs = (props) => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to EnergizeExpress! We are passionate about helping
            individuals achieve their health and fitness goals. Whether you're
            looking to lose weight, build muscle, or improve your overall
            well-being, our app is here to support you on your fitness journey.
          </p>
          <p>
            With our easy-to-use interface, you can track your workouts, log
            your nutrition, monitor your progress, and stay motivated. Our app
            provides a comprehensive set of tools and features to help you stay
            on track and reach your fitness milestones.
          </p>
          <p>
            Our dedicated team of fitness experts and professionals is
            constantly working to enhance the app's functionality and bring you
            the latest advancements in fitness tracking. We believe that fitness
            should be accessible to everyone, and we strive to make our app
            user-friendly and inclusive.
          </p>
          <p>
            Join our fitness community today and embark on a transformative
            fitness journey. Let's achieve our fitness goals together!
          </p>
          <h3>Why Choose Our App?</h3>
          <ul>
            <li>Intuitive and user-friendly interface</li>
            <li>Comprehensive workout and nutrition tracking</li>
            <li>Personalized goal setting and progress monitoring</li>
            <li>Motivational challenges and rewards system</li>
            <li>Access to a supportive fitness community</li>
            <li>Regular updates and new features</li>
          </ul>
        </div>
        {/* <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div> */}
      </div>
    </>
  );
};

export default AboutUs;
