import { createContext, useState } from "react";

export const allData = createContext();

export function ContextProvider({ children }) {
  const [signedInUser, setSignedInUser] = useState();
  const valueToShare = {
    signedInUser,
    setSignedInUser,
  };
  return <allData.Provider value={valueToShare}>{children}</allData.Provider>;
}
