import React from "react";
import "./rEgister.css";
import Sea from "./deadsea.jpg";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const navigate = useNavigate();
  let params = useParams();
  console.log(params.id);

  return (
    <div>
      <div
        className="register "
        style={{
          backgroundImage: `url(${Sea})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="FORM">
          <form>
            <h3>Join Us</h3>
            <div className="mb-2">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input type="text" className="form-control" id="userName" />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
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

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Retype password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input type="numeric" className="form-control" id="phone" />
            <div class="col-md-0">
              <label for="city" class="form-label">
                City
              </label>
              <select className="form-select" id="city" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Amman</option>
                <option>Zarqa</option>
                <option>Aqaba</option>
                <option>Irbid</option>
                <option>Salt</option>
              </select>
            </div>
            <Link>
            <button
              type="submit"
              className="btn"
              // onClick={() => {
              //   navigate("/LandingPage");
              // }}
            >
              Submit
            </button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
