import SlideImg from "./Components/LandingPage/Sliderimg/Sliderimg";
import Nav from "./Components/Header/Nav";
import AboutUs from "./Components/LandingPage/Aboutus/AboutUs";
import Testimonial from "./Components/LandingPage/testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import OurTeamContainer from "./Components/OurTeamContainer/ourTeamContainer";
import TourList from "./Pages/TourList";
function App() {
  return (
    <div>
      <Nav />
      <SlideImg />
      <AboutUs />
      <Testimonial />
      <OurTeamContainer />

      <Footer />
    </div>
  );
}

export default App;
