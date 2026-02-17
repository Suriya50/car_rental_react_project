import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Carlist from "../pages/Carlist";
import MyBookings from "../pages/MyBookings";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Registers from "../pages/Registers";
import Login from "../pages/Login";

const Routtings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Carlist />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookings" element={<MyBookings />} />
      
      {/* Auth routes */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/login" element={<Login />} />
      <Route path="/profile/register" element={<Registers />} />
      
      {/* Or keep separate auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registers />} />
    </Routes>
  );
};

export default Routtings;