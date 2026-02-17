import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import MyBookings from "../pages/MyBookings";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Login from "../pages/Login";
// Note: Booking.jsx and Footer.jsx are not needed in routes

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookings" element={<MyBookings />} />
        </Routes>
    );
};

export default Routing;