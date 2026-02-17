import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Booking from "../pages/Booking";
import MyBookings from "../pages/MyBookings";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";


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
           <Route path="/books" element={<Booking/>}/>

    </Routes>
  );
};

export default Routing;
