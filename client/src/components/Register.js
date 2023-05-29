import { useState } from "react";
import signup from "../images/signup.jpg";
import {useNavigate} from "react-router-dom";

const Register = (props) => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName:"",lname:"",mobile:0,emailId:"",password:"",cpassword:""
  });

  let id,value;
  const handleInputChange = (e)=>{
    id = e.target.id;
    value = e.target.value;
    setUser({...user,[id]:value})
  }

  const postData = async (e)=>{
    e.preventDefault();

    const {firstName,lastName,mobile,emailId,password} = user;

    const res = await fetch("/api/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName,lastName,mobile,emailId,password
      })
    })

    const response = await res.json();

    if(response.status === 200)
    {
      navigate('/home')
    }
  }

  return (
    <>
      <div className="cardClass">
        <div className="card-container">
          <div className="form-container">
          <h2 className="card-title">Register</h2>
          <div>
            <form className="card-title">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                  autoComplete="off"
                  value={user.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                  autoComplete="off"
                  value={user.lname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  aria-describedby="emailHelp"
                  placeholder="Enter Mobile"
                  autoComplete="off"
                  value={user.mobile}
                  onChange={handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your mobile with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="emailId">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  autoComplete="off"
                  value={user.emailId}
                  onChange={handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInputChange}
                />
                </div>
                 <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary card-submit-button"
                onClick={postData}
              >
                Register
              </button>
            </form>
          </div>
          </div>
          <div className="image-container">
          <img src={signup} alt="signup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
