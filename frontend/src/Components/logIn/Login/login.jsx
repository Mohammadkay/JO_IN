import React, { useEffect, useContext } from "react";
import "./lOgin.css";
import Petra from "./petra.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
import { allData } from "../../../context/context";
function Login() {
  const { currentUser, SetCurrentUser } = useContext(allData);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [AllUsers, setAllUsers] = useState([]);

  const fetchUser = async () => {
    const res = await axios.get("/Api/JO_IN/users");
    setAllUsers(res.data.data.users);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const handelLogin = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    try {
      // Find the user with the matching email in the AllUsers array
      console.log(AllUsers);
      const user = await AllUsers.find((ele) => ele.email === emailRef.current.value);

      if (!user) {
        throw new Error("User not found"); // Throw an error if user not found
      }

      // Compare the provided password with the hashed password stored in the user object
      const passwordMatches = await bcrypt.compare(passwordRef.current.value, user.password);
      console.log(passwordMatches);
      if (passwordMatches) {
        // Passwords match, you can proceed with setting the current user
        SetCurrentUser(user);
        navigate("/TourList");
        return user; // Return the user object for success
      } else {
        throw new Error("Invalid password"); // Throw an error if password does not match
      }
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while processing your request");
    }
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
