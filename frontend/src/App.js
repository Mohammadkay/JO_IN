import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/Landingpage";
import TourList from "./Pages/TourList.jsx";
import Login from "./Components/logIn/Login/login";
import Choose from "./Components/logIn/ChooseC/choose";
import Register from "./Components/logIn/Register/register";
import TourDetails from "./Components/TourDetails/details";
import Check from "./Components/CheckOut/Check";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TourList" element={<TourList />} />
        <Route path="/TourList/TourDetails" element={<TourDetails />} />
        <Route path="/TourList/TourDetails/CheckOut" element={<Check />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
