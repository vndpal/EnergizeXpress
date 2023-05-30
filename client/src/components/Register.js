import { useState } from "react";
import signup from "../images/signup.jpg";
import {useNavigate} from "react-router-dom";
import {useFormik } from 'formik';
import {resigterSchema} from '../schemas';

const initialValues = {
  firstName:"",lname:"",mobile:"",emailId:"",password:"",cpassword:""
}

const Register = (props) => {

 const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:resigterSchema,
    onSubmit: async (values,action)=>{
     postData1(values);
      action.resetForm();
    },
  })
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName:"",lname:"",mobile:"",emailId:"",password:"",cpassword:""
  });

  let id,value;
  const handleInputChange = (e)=>{
    id = e.target.id;
    value = e.target.value;
    setUser({...user,[id]:value})
  }

  const postData1 = async (values)=>{
    


    const res = await fetch("/api/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
     values
      })
    })

    const response = await res.json();

    if(response.status === 200)
    {
      navigate('/home')
    }
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
            <form className="card-title" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                  autoComplete="off"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.firstName && touched.firstName?  <p>{errors.firstName}</p> : null}
              </div>
              <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name="lname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                  autoComplete="off"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  aria-describedby="emailHelp"
                  placeholder="Enter Mobile"
                  autoComplete="off"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  name="emailId"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  autoComplete="off"
                  value={values.emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                </div>
                 <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={values.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary card-submit-button"
                // onClick={postData}
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
