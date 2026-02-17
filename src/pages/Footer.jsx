import { Link } from "react-router-dom";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaApple, FaGooglePlay, FaHeart, FaRupeeSign
} from "react-icons/fa";
import { 
  SiVisa, SiMastercard, SiAmericanexpress, SiPaypal, 
  SiRazorpay, SiPhonepe, SiGooglepay, SiPaytm 
} from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        
        {/* Mobile-First Grid - Single column on mobile, multi-column on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Column 1: Company Info - Full width on mobile */}
          <div className="space-y-3 md:space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  Rent<span className="text-orange-500">Ride</span>
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs sm:max-w-sm">
              India's most trusted premium car rental service. Drive your dreams with our luxury and economy fleet.
            </p>
            
            {/* Social Icons - Left aligned on mobile */}
            <div className="flex gap-2 sm:gap-3 pt-1">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xs sm:text-sm group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xs sm:text-sm group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xs sm:text-sm group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xs sm:text-sm group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 md:mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-6 sm:w-8 h-0.5 bg-orange-500"></span>
            </h3>
            
            {/* Links in single column on mobile */}
            <ul className="grid grid-cols-1 gap-2 md:gap-3">
              <li>
                <Link to="/" className="text-xs sm:text-sm hover:text-orange-500 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs sm:text-sm hover:text-orange-500 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-xs sm:text-sm hover:text-orange-500 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition"></span>
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-xs sm:text-sm hover:text-orange-500 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition"></span>
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs sm:text-sm hover:text-orange-500 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-xs sm:text-sm hover:text-orange-500 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition"></span>
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 md:mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-6 sm:w-8 h-0.5 bg-orange-500"></span>
            </h3>
            
            {/* Contact items stacked vertically on mobile */}
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-500/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <FaPhone className="text-orange-500 text-xs sm:text-sm" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">+91 78689 43703</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">24/7 Customer Support</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-500/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <FaEnvelope className="text-orange-500 text-xs sm:text-sm" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white break-all">surya@rentride.com</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Email us anytime</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-500/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-orange-500 text-xs sm:text-sm" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">Chennai, Tamil Nadu</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">India - 600001</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-500/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <FaClock className="text-orange-500 text-xs sm:text-sm" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">Open 24/7</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">All days including holidays</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Download App & Payment */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 md:mb-4 relative inline-block">
              Download App
              <span className="absolute -bottom-1 left-0 w-6 sm:w-8 h-0.5 bg-orange-500"></span>
            </h3>
            
            {/* App buttons side by side on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 md:mb-6">
              <a 
                href="#" 
                className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 bg-gray-800 hover:bg-orange-600 px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl transition group"
              >
                <FaApple className="text-lg sm:text-xl lg:text-2xl text-gray-300 group-hover:text-white flex-shrink-0" />
                <div className="hidden xs:block">
                  <p className="text-[6px] sm:text-[7px] lg:text-[8px] text-gray-400">Download on the</p>
                  <p className="text-[8px] sm:text-xs lg:text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 bg-gray-800 hover:bg-orange-600 px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl transition group"
              >
                <FaGooglePlay className="text-base sm:text-lg lg:text-xl text-gray-300 group-hover:text-white flex-shrink-0" />
                <div className="hidden xs:block">
                  <p className="text-[6px] sm:text-[7px] lg:text-[8px] text-gray-400">Get it on</p>
                  <p className="text-[8px] sm:text-xs lg:text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>

            <h3 className="text-white font-semibold text-base sm:text-lg mb-2 md:mb-3">We Accept</h3>
            
            {/* Payment Icons - Grid layout for better mobile view */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              <SiVisa className="text-2xl sm:text-3xl text-blue-500 hover:scale-110 transition mx-auto" title="Visa" />
              <SiMastercard className="text-2xl sm:text-3xl text-red-500 hover:scale-110 transition mx-auto" title="Mastercard" />
              <SiAmericanexpress className="text-2xl sm:text-3xl text-blue-400 hover:scale-110 transition mx-auto" title="American Express" />
              <SiPaypal className="text-2xl sm:text-3xl text-blue-600 hover:scale-110 transition mx-auto" title="PayPal" />
              <SiRazorpay className="text-2xl sm:text-3xl text-blue-500 hover:scale-110 transition mx-auto" title="Razorpay" />
              <SiPhonepe className="text-2xl sm:text-3xl text-purple-500 hover:scale-110 transition mx-auto" title="PhonePe" />
              <SiGooglepay className="text-2xl sm:text-3xl text-green-500 hover:scale-110 transition mx-auto" title="Google Pay" />
              <SiPaytm className="text-2xl sm:text-3xl text-blue-400 hover:scale-110 transition mx-auto" title="Paytm" />
            </div>
            
            {/* Secure Payment Badge - Centered on mobile */}
            <div className="mt-3 md:mt-4 flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-400">
              <FaRupeeSign className="text-orange-500 text-xs sm:text-sm" />
              <span>Secure Indian Payments</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            
            {/* Copyright - Centered on mobile */}
            <p className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1 text-center">
              © {currentYear} RentRide. All rights reserved. 
              <span className="flex items-center">
                Made with 
                <FaHeart className="text-orange-500 text-[10px] sm:text-xs mx-0.5 animate-pulse" /> 
                in India
              </span>
            </p>
            
            {/* Policy Links - Wrapping grid on mobile */}
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 sm:gap-x-4 text-[10px] sm:text-xs">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition whitespace-nowrap">
                Privacy
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition whitespace-nowrap">
                Terms
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/refund" className="text-gray-400 hover:text-orange-500 transition whitespace-nowrap">
                Refund
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/faq" className="text-gray-400 hover:text-orange-500 transition whitespace-nowrap">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for extra small devices */}
      <style>{`
        @media (min-width: 380px) {
          .xs\\:block {
            display: block;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;