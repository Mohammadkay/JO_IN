import React, { useEffect, useContext } from "react";
import "./lOgin.css";
import Petra from "./petra.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { allData } from "../../../context/context";
function Login() {
  const { login, currentUser, SetCurrentUser } = useContext(allData);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  // ...
  useEffect(() => {
    if (currentUser != null) {
      navigate("/TourList");
    }
  }, [currentUser]);
  const handelLogin = async (e) => {
    e.preventDefault();
    SetCurrentUser(null);
    await login(emailRef.current.value, passwordRef.current.value);
  };
  // ...

  return (
    <div>
      <div
        className="Log-in "
        style={{
          backgroundImage: `url(${Petra})`,
          height: "100vh",
          backgroundSize: "cover"
        }}
      >
        <div className="FORM">
          <form onSubmit={handelLogin}>
            <h3>Welcome Again</h3>
            <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" ref={passwordRef} id="exampleInputPassword1" />
            </div>
            <h6>
              Don't Have Account? <Link> Sign Up</Link>
            </h6>
            <button type="submit" className="btn ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
