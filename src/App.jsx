import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import Specifications from "./components/Specifications";
import Location from "./components/Location";
import Contact from "./components/Contact";
import EnquiryPopup from "./components/EnquiryPopup";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <FloorPlans />
      <Specifications />
      <Location />
      <Contact />
      <Footer />
      <EnquiryPopup />
    </>
  );
}
