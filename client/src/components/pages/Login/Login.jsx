import React, { useState } from "react";
import "../Login/login.css";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../../context/googleAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setError("");
    // try {
    //   await logIn(email, password);
 
    // } catch (err) {
    //   setError(err.message);
    // }
  };
  const handlegoogleIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://www.burlesonlawpllc.com/wp-content/uploads/2016/01/Shutterfly-Criminal-300x200.jpg"
              className="img-fluid w-100 h-100"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h3 className="text-center">login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg"
                />
   
              </div>

              <div className="form mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="password" onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn logInBtn">
                Login
              </button>
              <hr />

              <div>
                <GoogleButton
                  className="g-btn w-100"
                  type="dark"
                  onClick={handlegoogleIn}
                />
              </div>

              {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div> */}

              {/* <a className="btn btn-primary btn-lg btn-block"  href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
