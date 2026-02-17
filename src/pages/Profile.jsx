import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUser, FaEnvelope, FaPhone, FaCar, FaCalendarAlt, 
  FaStar, FaSignOutAlt, FaEdit, FaHistory, FaHeart,
  FaCreditCard, FaHeadset, FaShieldAlt, FaAward, FaCog
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    memberSince: "",
    bookings: 0,
    rewards: 0,
    avatar: null
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("rentrideUser");
    const loggedIn = localStorage.getItem("isLoggedIn");
    
    if (storedUser && loggedIn === "true") {
      const user = JSON.parse(storedUser);
      setUserData({
        ...user,
        memberSince: "2024",
        bookings: 12,
        rewards: 2450,
        avatar: user.avatar || null
      });
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const quickStats = [
    { icon: <FaCar />, value: userData.bookings, label: "Bookings", color: "text-blue-500" },
    { icon: <FaStar />, value: userData.rewards, label: "Points", color: "text-yellow-500" },
    { icon: <FaAward />, value: "Gold", label: "Tier", color: "text-purple-500" },
  ];

  const menuItems = [
    { icon: <FaHistory />, label: "History", path: "/bookings", color: "text-blue-500" },
    { icon: <FaHeart />, label: "Saved", path: "/saved-cars", color: "text-red-500" },
    { icon: <FaCreditCard />, label: "Payments", path: "/payments", color: "text-green-500" },
    { icon: <FaCog />, label: "Settings", path: "/settings", color: "text-gray-500" },
  ];

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 p-4 flex items-center justify-center">
      
      {/* Compact Profile Card */}
      <div className="w-full max-w-md">
        
        {/* Welcome Header - Small */}
        <div className="mb-3">
          <h1 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <FaUser className="text-orange-500 text-sm" />
            <span>Hi, <span className="text-orange-500">{userData.name?.split(" ")[0] || "User"}</span></span>
          </h1>
          <p className="text-xs text-gray-400">Manage your account</p>
        </div>

        {/* Main Profile Card - Compact */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          
          {/* Profile Header - Mini Cover */}
          <div className="h-16 bg-gradient-to-r from-orange-500 to-orange-600 relative">
            {/* Avatar positioned at center bottom */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
              <div className="relative">
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-16 h-16 rounded-full border-3 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full border-3 border-white shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                    {getInitials(userData.name || "User")}
                  </div>
                )}
                {/* Online Status - Small */}
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
            </div>

            {/* Edit Button - Small */}
            <button className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 rounded-full text-[10px] transition">
              <FaEdit className="text-[10px]" />
            </button>
          </div>

          {/* Profile Info - Compact */}
          <div className="pt-10 pb-4 px-4">
            
            {/* Name & Member Badge */}
            <div className="text-center">
              <h2 className="text-base font-bold text-gray-800">{userData.name || "User Name"}</h2>
              <p className="text-orange-500 text-[10px] flex items-center justify-center gap-1 mt-0.5">
                <FaShieldAlt className="text-[8px]" />
                Gold Member
              </p>
            </div>

            {/* Contact Info - Small Pills */}
            <div className="flex flex-col gap-1.5 mt-3">
              <div className="flex items-center gap-2 text-[10px] text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <FaEnvelope className="text-orange-500 text-[10px]" />
                <span className="truncate">{userData.email || "email@example.com"}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <FaPhone className="text-orange-500 text-[10px]" />
                <span>{userData.phone || "+91 98765 43210"}</span>
              </div>
            </div>

            {/* Member Since - Small */}
            <div className="flex items-center justify-center gap-1 mt-2 text-[8px] text-gray-400">
              <FaCalendarAlt className="text-[8px]" />
              Member since {userData.memberSince || "2024"}
            </div>

            {/* Quick Stats - Mini Grid */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                  <div className={`${stat.color} text-sm mb-0.5`}>{stat.icon}</div>
                  <p className="text-xs font-bold text-gray-800">{stat.value}</p>
                  <p className="text-[8px] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Menu Items - Mini Grid */}
            <div className="grid grid-cols-4 gap-1 mt-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="group p-2 hover:bg-orange-50 rounded-lg transition-all"
                >
                  <div className={`${item.color} text-base group-hover:scale-110 transition-transform mb-1`}>
                    {item.icon}
                  </div>
                  <p className="text-[8px] font-medium text-gray-600 group-hover:text-orange-500">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Logout Button - Compact */}
            <button
              onClick={handleLogout}
              className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <FaSignOutAlt className="text-xs" />
              <span>Logout</span>
            </button>

            {/* Security Note - Tiny */}
            <p className="text-[7px] text-gray-400 text-center mt-2">
              🔒 Securely signed in
            </p>
          </div>
        </div>

        {/* Recent Activity - Mini Card */}
        <div className="mt-3 bg-white rounded-xl shadow-md p-3 border border-gray-100">
          <h3 className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1">
            <FaHistory className="text-orange-500 text-[10px]" />
            Recent
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                  <FaCar className="text-blue-500 text-[8px]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-800">Camry booked</p>
                  <p className="text-[7px] text-gray-400">2d ago</p>
                </div>
              </div>
              <span className="text-[7px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded">Done</span>
            </div>
            <div className="flex items-center justify-between p-1.5 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">
                  <FaStar className="text-purple-500 text-[8px]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-800">100 points</p>
                  <p className="text-[7px] text-gray-400">5d ago</p>
                </div>
              </div>
              <span className="text-[7px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">Earned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;