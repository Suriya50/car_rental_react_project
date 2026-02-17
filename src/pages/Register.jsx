import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  FaUser, FaEnvelope, FaPhone, FaLock, 
  FaArrowRight, FaCar, FaStar, FaGoogle, FaFacebook 
} from "react-icons/fa";
import carImage from "../assets/cars/logos/Register.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to Terms & Conditions");
      return;
    }
    localStorage.setItem("rentrideUser", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-orange-50 p-3 sm:p-4">
      
      {/* Main Card - Responsive sizing */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-orange-100">
        
        {/* Stack on mobile, grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          
          {/* LEFT SIDE - Car Image Section */}
          <div className="relative h-40 sm:h-44 md:h-auto bg-gradient-to-br from-orange-500 to-orange-600 p-4 sm:p-5 flex flex-col items-center justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            {/* Car Image */}
            <div className="relative mb-2 sm:mb-3 transform hover:scale-110 transition-transform duration-300">
              <img
                src={carImage}
                alt="RentRide"
                className="w-60 sm:w-60 rounded-full md:w-48 h-80 sm:h-32 md:h-36 object-contain drop-shadow-2xl"
              />
              {/* Floating Car Icon */}
              <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 sm:p-1.5 shadow-lg">
                <FaCar className="text-orange-500 text-[8px] sm:text-xs" />
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg text-center">
              Welcome to RentRide
            </h3>
            <p className="text-orange-100 text-[10px] sm:text-xs text-center mt-0.5">
              Premium car rentals
            </p>
            
            {/* Stats - Responsive layout */}
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-3">
              <div className="text-center">
                <p className="text-white font-bold text-xs sm:text-sm">50K+</p>
                <p className="text-orange-200 text-[8px] sm:text-[10px]">Users</p>
              </div>
              <div className="w-px h-4 sm:h-5 bg-orange-400"></div>
              <div className="text-center">
                <p className="text-white font-bold text-xs sm:text-sm">4.9</p>
                <p className="text-orange-200 text-[8px] sm:text-[10px]">Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Register Form */}
          <div className="p-4 sm:p-5 md:p-6 bg-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
            
            {/* Header */}
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 sm:w-8 h-0.5 bg-orange-500 rounded-full"></div>
                <span className="text-orange-500 font-medium text-[10px] sm:text-xs">
                  GET STARTED
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                Create Account
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                Join our community today
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              
              {/* Name Input */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[10px] sm:text-xs" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 sm:pl-8 pr-3 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-gray-50 transition"
                  style={{ minHeight: '40px' }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[10px] sm:text-xs" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 sm:pl-8 pr-3 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-gray-50 transition"
                  style={{ minHeight: '40px' }}
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[10px] sm:text-xs" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 sm:pl-8 pr-3 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-gray-50 transition"
                  style={{ minHeight: '40px' }}
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[10px] sm:text-xs" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 sm:pl-8 pr-8 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-gray-50 transition"
                  style={{ minHeight: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition"
                >
                  {showPassword ? (
                    <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="w-3 sm:w-4 h-3 sm:h-4 text-orange-500 rounded focus:ring-orange-500"
                />
                <label htmlFor="terms" className="text-[8px] sm:text-[10px] text-gray-500">
                  I agree to Terms & Conditions
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/20"
                style={{ minHeight: '44px' }}
              >
                <span>Login</span>
                <FaArrowRight className="text-[10px] sm:text-xs group-hover:translate-x-1 transition" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-3 sm:my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 sm:px-3 bg-white text-[8px] sm:text-[10px] text-gray-400">
                  or sign up with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] text-gray-600 hover:bg-gray-50 hover:border-orange-500 transition">
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] text-gray-600 hover:bg-gray-50 hover:border-orange-500 transition">
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-[8px] sm:text-[10px] text-gray-500 mt-3 sm:mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;