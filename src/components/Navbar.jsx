import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { 
  FaHome, FaInfoCircle, FaCar, FaCalendarAlt, 
  FaPhone, FaUser, FaBars, FaTimes, FaChevronRight
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Cars", path: "/cars", icon: <FaCar /> },
    { name: "Bookings", path: "/bookings", icon: <FaCalendarAlt /> },
    { name: "Contact", path: "/contact", icon: <FaPhone /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      {/* Main Navbar */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* LOGO - Home Link */}
            <Link 
              to="/" 
              className="flex items-center flex-shrink-0 group"
              aria-label="Go to homepage"
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="RentRide" 
                  className="w-28 sm:w-32 lg:w-40 h-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  loading="eager"
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>

            {/* Desktop MENU LINKS - With Icons */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      relative px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-lg
                      transition-all duration-200 inline-flex items-center gap-1.5
                      ${isActive(link.path)
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                      }
                      group
                    `}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    <span className="text-sm lg:text-base">{link.icon}</span>
                    <span>{link.name}</span>
                    <span className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2
                      h-0.5 bg-orange-500 transition-all duration-300
                      ${isActive(link.path) ? 'w-1/2' : 'w-0 group-hover:w-1/2'}
                    `}></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu - With Icons */}
        <div className={`
          fixed md:hidden top-16 left-0 right-0 bottom-0 bg-white z-40
          transition-transform duration-300 ease-in-out transform
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `}>
          <div className="min-h-full px-4 py-6 pb-20">
            {/* User greeting */}
            <div className="mb-6 px-4 py-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
              <p className="text-xs text-orange-600 font-medium">Welcome to</p>
              <p className="text-sm font-bold text-gray-800">RentRide</p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl
                    transition-all duration-200
                    ${isActive(link.path)
                      ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50 border-l-4 border-transparent'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg ${
                      isActive(link.path) ? 'text-orange-500' : 'text-gray-500'
                    }`}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <FaChevronRight className={`text-xs ${
                    isActive(link.path) ? 'text-orange-500' : 'text-gray-400'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Additional Mobile Menu Footer */}
            <div className="mt-8 px-4">
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 text-center">
                  Need help? <Link to="/contact" className="text-orange-500 font-medium">Contact us</Link>
                </p>
                <p className="text-xs text-gray-400 text-center mt-2">
                  © 2024 RentRide. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* iOS Safe Area Support */}
        <style jsx>{`
          @supports (padding-top: env(safe-area-inset-top)) {
            .top-16 {
              top: calc(4rem + env(safe-area-inset-top));
            }
          }
        `}</style>
      </nav>

      {/* Mobile Menu CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-menu-enter {
          transform: translateX(100%);
        }

        .mobile-menu-enter-active {
          transform: translateX(0);
          transition: transform 300ms ease-in-out;
        }

        .mobile-menu-exit {
          transform: translateX(0);
        }

        .mobile-menu-exit-active {
          transform: translateX(100%);
          transition: transform 300ms ease-in-out;
        }

        @media (max-width: 768px) {
          .fixed {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;