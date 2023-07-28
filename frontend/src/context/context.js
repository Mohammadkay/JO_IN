import { createContext, useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
export const allData = createContext({});

export function Provider({ children }) {
  const [currentUser, SetCurrentUser] = useState();
  const [allTours, setAllTours] = useState([]);
  const [AllUsers, setAllUsers] = useState([]);

  const fetchTours = async () => {
    const res = await axios.get("/Api/JO_IN/tours");
    setAllTours(res.data.tours);
  };
  const fetchUser = async () => {
    const res = await axios.get("/Api/JO_IN/users");
    setAllUsers(res.data.data.users);
  };
  console.log(AllUsers);
  const login = async (email, password) => {
    try {
      // Find the user with the matching email in the AllUsers array
      const user = AllUsers.find((ele) => ele.email === email);
  
      if (!user) {
        throw new Error("User not found"); // Throw an error if user not found
      }
  
      // Compare the provided password with the hashed password stored in the user object
      const passwordMatches = await bcrypt.compare(password, user.password);
  
      if (passwordMatches) {
        // Passwords match, you can proceed with setting the current user
        SetCurrentUser(user);
        return user; // Return the user object for success
      } else {
        throw new Error("Invalid password"); // Throw an error if password does not match
      }
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while processing your request");
    }
  };

  const dataToShare = {
    fetchTours,
    allTours,
    setAllTours,
    fetchUser,
    currentUser,
    login,
    SetCurrentUser
  };
  return <allData.Provider value={dataToShare}>{children}</allData.Provider>;
}
