import { createContext, useState } from "react";
import axios from "axios";
export const allData = createContext({});

export function Provider({ children}){
    const [allTours, setAllTours] = useState([]);

    const fetchTours = async () => {
      const res = await axios.get("/Api/JO_IN/tours");
      console.log(res.data);
      setAllTours(res.data.tours);
    };
const dataToShare = {
  fetchTours,
  allTours,
  setAllTours,
};

return <allData.Provider value={dataToShare}>{children}</allData.Provider>;

}

