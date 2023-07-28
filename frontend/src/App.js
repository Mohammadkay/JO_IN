import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
// import LandingPage from "./Pages/Landingpage";
// import TourList from "./Pages/TourList.jsx";
// import Login from "./Components/logIn/Login/login";
// import Choose from "./Components/logIn/ChooseC/choose";
// import Register from "./Components/logIn/Register/register";
// import TourDetails from "./Components/TourDetails/details";
// import Check from "./Components/CheckOut/Check";
// import HistorySection from "./Components/History/HistorySection";
import Dash from "./Pages/Dash";

import { allData } from "./context/context";
import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import FromDash from "./Components/DashBord/FromDash";

function App() {
    const { fetchTours, allTours } = useContext(allData);
    useEffect(() => {
      fetchTours();
    }, []);

  return (
    <div>
      <Nav />
      {/* <HistorySection/> */}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/TourList" element={<TourList />} />
        <Route path="/TourList/TourDetails" element={<TourDetails />} />
        <Route path="/TourList/TourDetails/CheckOut" element={<Check />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/Register" element={<Register />} /> */}
        <Route path="/dash" element={<Dash />}></Route>
        <Route path="/addTour" element={<FromDash />}></Route>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
