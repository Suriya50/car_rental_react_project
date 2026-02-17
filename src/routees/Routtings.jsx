import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Carlist from "../pages/Carlist";
import MyBookings from "../pages/MyBookings";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";  // This contains Login & Register

const Routtings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Carlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookings" element={<MyBookings />} />
    </Routes>
  );
};

export default Routtings;
