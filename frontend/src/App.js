import SlideImg from "./Components/LandingPage/Sliderimg/Sliderimg";
import Nav from "./Components/Header/Nav";
import AboutUs from "./Components/LandingPage/Aboutus/AboutUs";
import Testimonial from "./Components/LandingPage/testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Nav />
      <SlideImg />
      <AboutUs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
