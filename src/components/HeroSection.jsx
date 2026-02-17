import { Link } from "react-router-dom";
import heroImage from "../assets/images/Thar.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[500px] md:min-h-[600px] lg:h-[700px] flex items-center">
        <div className="text-white w-full">
          {/* Badge */}
          <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            ★ Trusted by 5000+ customers
          </span>

          {/* Heading */}
          <h1 className="text-1xl sm:text-1xl md:text-1xl lg:text-5xl font-bold mb-3 md:mb-4">
            Drive Your Dream
            <span className="block text-orange-400 mt-1 md:mt-2">Car Today!</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
            Experience luxury and comfort with our premium car rental service. 
            Choose from 150+ vehicles at unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/cars"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition text-center text-sm sm:text-base"
            >
              Browse Cars
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg border border-white/20 transition text-center text-sm sm:text-base"
            >
              Contact Support
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">150+</div>
              <div className="text-xs sm:text-sm text-gray-300">Luxury Cars</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">5000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">25</div>
              <div className="text-xs sm:text-sm text-gray-300">Cities</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">10+</div>
              <div className="text-xs sm:text-sm text-gray-300">Years Exp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;