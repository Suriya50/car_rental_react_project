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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <FaUser className="text-orange-500 text-sm" />
            <span>Profile</span>
          </h1>
          <button className="text-gray-400 hover:text-gray-600">
            <FaEdit className="text-sm" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4">
        {/* Welcome Message */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Hi, <span className="text-orange-500">{userData.name?.split(" ")[0] || "User"}</span>
          </h2>
          <p className="text-xs text-gray-400">Welcome back to your dashboard</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-orange-50 mb-4 overflow-hidden">
          {/* Cover Photo with Avatar */}
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            
            {/* Avatar - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
              <div className="relative">
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                    {getInitials(userData.name || "User")}
                  </div>
                )}
                {/* Online Status */}
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="absolute top-2 right-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full text-xs transition">
              <FaEdit className="text-xs" />
            </button>
          </div>

          {/* User Info */}
          <div className="pt-14 pb-4 px-4">
            {/* Name & Member Badge */}
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold text-gray-800">{userData.name || "User Name"}</h3>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1 text-xs text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                  <FaShieldAlt className="text-[10px]" />
                  Gold Member
                </span>
                <span className="text-xs text-gray-400">
                  <FaCalendarAlt className="inline mr-1 text-[10px]" />
                  {userData.memberSince || "2024"}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 text-sm bg-gray-50 p-3 rounded-xl">
                <FaEnvelope className="text-orange-500 text-sm" />
                <span className="text-gray-600 text-sm truncate">{userData.email || "email@example.com"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm bg-gray-50 p-3 rounded-xl">
                <FaPhone className="text-orange-500 text-sm" />
                <span className="text-gray-600 text-sm">{userData.phone || "+91 98765 43210"}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className={`${stat.color} text-lg mb-1`}>{stat.icon}</div>
                  <p className="text-sm font-bold text-gray-800">{stat.value}</p>
                  <p className="text-[10px] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="group p-2 hover:bg-orange-50 rounded-xl transition-all"
                >
                  <div className={`${item.color} text-lg group-hover:scale-110 transition-transform mb-1`}>
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-medium text-gray-600 group-hover:text-orange-500">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <FaSignOutAlt className="text-sm" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FaHistory className="text-orange-500 text-sm" />
            Recent Activity
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaCar className="text-blue-500 text-sm" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">Toyota Camry</p>
                  <p className="text-[10px] text-gray-400">Booked • 2 days ago</p>
                </div>
              </div>
              <span className="text-[9px] bg-green-100 text-green-600 px-2 py-1 rounded-full">Completed</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaStar className="text-purple-500 text-sm" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">Reward Points</p>
                  <p className="text-[10px] text-gray-400">Earned • 5 days ago</p>
                </div>
              </div>
              <span className="text-[9px] bg-orange-100 text-orange-600 px-2 py-1 rounded-full">+100 pts</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaHeart className="text-green-500 text-sm" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">Honda City</p>
                  <p className="text-[10px] text-gray-400">Saved • 1 week ago</p>
                </div>
              </div>
              <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Saved</span>
            </div>
          </div>

          {/* View All Link */}
          <button className="w-full mt-3 text-center text-xs text-orange-500 hover:text-orange-600 font-medium py-2">
            View All Activity
          </button>
        </div>

        {/* Support Section */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-gray-50 hover:bg-gray-100 rounded-xl p-3 flex items-center justify-center gap-2 transition">
            <FaHeadset className="text-orange-500 text-sm" />
            <span className="text-xs font-medium text-gray-700">Support</span>
          </button>
          <button className="flex-1 bg-gray-50 hover:bg-gray-100 rounded-xl p-3 flex items-center justify-center gap-2 transition">
            <FaShieldAlt className="text-orange-500 text-sm" />
            <span className="text-xs font-medium text-gray-700">Security</span>
          </button>
        </div>

        {/* App Version */}
        <p className="text-[8px] text-gray-400 text-center mt-4">
          Version 2.0.1 • Securely signed in
        </p>
      </div>
    </div>
  );
};

export default Profile;