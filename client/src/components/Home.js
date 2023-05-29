import signup from "../images/signup.jpg";

const Home = (props) => {
  return (
    <>
      <div className="cardClass">
        <div className="card-container">
          <div className="form-container">
          <h2 className="card-title">HOME it is</h2>
          <div>
            <form className="card-title">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
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

export default Home;
