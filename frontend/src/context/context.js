import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const allData = createContext({});

export function Provider({ children }) {
  const [currentUser, SetCurrentUser] = useState(null);
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

  const dataToShare = {
    fetchTours,
    allTours,
    setAllTours,
    fetchUser,
    currentUser,

    SetCurrentUser
  };
  return <allData.Provider value={dataToShare}>{children}</allData.Provider>;
}
