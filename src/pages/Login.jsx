import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  FaEnvelope, FaLock, FaArrowRight, FaCar, 
  FaStar, FaShieldAlt, FaEye, FaEyeSlash 
} from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import carImage from "../assets/cars/car7.png";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("rentrideUser"));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-orange-50 p-3 sm:p-4">
      
      {/* Main Card - Responsive sizing */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-orange-100">
        
        {/* Stack on mobile, grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          
          {/* LEFT SIDE - Car Image Section - Hidden on very small? No, visible but compact */}
          <div className="relative h-40 sm:h-48 md:h-auto bg-gradient-to-br from-orange-500 to-orange-600 p-4 sm:p-6 flex flex-col items-center justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
            
            {/* Decorative Elements - Optimized for mobile */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            {/* Steering Wheel Icon Background - Hidden on mobile */}
            <div className="absolute opacity-10 hidden sm:block">
              <GiSteeringWheel className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 text-white animate-spin-slow" />
            </div>
            
            {/* Car Image */}
            <div className="relative mb-2 sm:mb-3 transform hover:scale-105 transition-transform duration-500">
              <img
                src={carImage}
                alt="RentRide"
                className="w-32 sm:w-40 md:w-48  rounded-full h-32 sm:h-40 md:h-48 object-contain drop-shadow-2xl"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full -z-10"></div>
              
              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1 sm:p-1.5 shadow-lg animate-pulse">
                <FaStar className="text-white text-[8px] sm:text-xs" />
              </div>
            </div>

            {/* Text Content - Responsive text */}
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg text-center tracking-wide">
              Welcome Back!
            </h3>
            <p className="text-orange-100 text-[10px] sm:text-xs text-center mt-0.5">
              Glad to see you again
            </p>
            
            {/* Security Badge - Hidden on very small, visible on sm+ */}
            <div className="hidden sm:flex items-center gap-2 mt-2 sm:mt-3 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              <FaShieldAlt className="text-white text-[8px] sm:text-[10px]" />
              <span className="text-white text-[8px] sm:text-[10px]">Secure Login</span>
            </div>
          </div>

          {/* RIGHT SIDE - Login Form */}
          <div className="p-4 sm:p-5 md:p-6 bg-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
            
            {/* Header with Decoration */}
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 sm:w-8 h-0.5 bg-orange-500 rounded-full"></div>
                <span className="text-orange-500 font-medium text-[10px] sm:text-xs">
                  WELCOME BACK
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                Login to RentRide
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                Access your account
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-2 sm:mb-3 p-2 sm:p-2.5 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-500 text-[10px] sm:text-xs text-center">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              
              {/* Email Input */}
              <div className="relative group">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition text-[10px] sm:text-xs" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 sm:pl-8 pr-3 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-gray-50 transition"
                  style={{ minHeight: '40px' }}
                />
              </div>

              {/* Password Input with Show/Hide */}
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition text-[10px] sm:text-xs" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-7 sm:pl-8 pr-8 py-2 sm:py-2.5 text-[10px] sm:text-xs border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-gray-50 transition"
                  style={{ minHeight: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-[10px] sm:text-xs" />
                  ) : (
                    <FaEye className="text-[10px] sm:text-xs" />
                  )}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-[8px] sm:text-[10px] text-orange-500 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/20"
                style={{ minHeight: '44px' }}
              >
                <span>Login to Account</span>
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
                  or continue with
                </span>
              </div>
            </div>

            {/* Social Login - Responsive grid */}
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] text-gray-600 hover:bg-gray-50 hover:border-orange-500 transition group">
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] text-gray-600 hover:bg-gray-50 hover:border-orange-500 transition group">
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-[8px] sm:text-[10px] text-gray-500 mt-3 sm:mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-orange-500 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>

            {/* Demo Credentials Hint */}
            <div className="mt-2 sm:mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-[6px] sm:text-[8px] text-gray-400 text-center">
                Demo: use registered email & password
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;