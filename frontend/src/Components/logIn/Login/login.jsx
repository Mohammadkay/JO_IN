import React from "react";
import "./lOgin.css";
import Petra from "./petra.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div
        className="Log-in "
        style={{
          backgroundImage: `url(${Petra})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="FORM">
          <form>
            <h3>Welcome Again</h3>
            <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
              <div id="emailHelp" className="form-text">
                {" "}
                *We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <h6>
              {" "}
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
