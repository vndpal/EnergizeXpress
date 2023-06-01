import signup from "../images/signup.jpg";
import {useNavigate} from "react-router-dom";
import {useFormik } from 'formik';
import {resigterSchema} from '../schemas';

const initialValues = {
  firstName:"",lname:"",mobile:"",emailId:"",password:"",cpassword:""
}

const Register = (props) => {

  const navigate = useNavigate();
  
 const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:resigterSchema,
  
    onSubmit: async (values,action)=>{
      const   {firstName,lastName,mobile,emailId,password} = values;
      const res = await fetch("/api/users/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          firstName,lastName,mobile,emailId,password
        })
      })

      if(res.status === 200)
      {
        navigate('/');
        action.resetForm();
      }
      if(res.status === 500)
      {
          //ToDo Add some message here
      }
      
    },
  })
  
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
                { errors.firstName && touched.firstName?  <p class="error-message">{errors.firstName}</p> : null}
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
                { errors.lname && touched.lname?  <p class="error-message">{errors.lname}</p> : null}
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  aria-describedby="emailHelp"
                  placeholder="Enter Mobile e.g. +12-1234567890"
                  autoComplete="off"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.mobile && touched.mobile?  <p class="error-message">{errors.mobile}</p> : null}
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
                { errors.emailId && touched.emailId?  <p class="error-message">{errors.emailId}</p> : null}
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
                { errors.password && touched.password?  <p class="error-message">{errors.password}</p> : null}
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
                { errors.cpassword && touched.cpassword?  <p class="error-message">{errors.cpassword}</p> : null}
              </div>
              <button
                type="submit"
                className="btn btn-primary card-submit-button"
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
