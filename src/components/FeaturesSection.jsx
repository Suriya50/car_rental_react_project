import { Link } from "react-router-dom";
import { FaHeadset, FaCar, FaClock, FaDollarSign } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaHeadset className="text-2xl md:text-3xl lg:text-4xl text-orange-500" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your peace of mind"
    },
    {
      icon: <FaCar className="text-2xl md:text-3xl lg:text-4xl text-orange-500" />,
      title: "150+ Premium Cars",
      description: "Wide selection from economy to luxury vehicles"
    },
    {
      icon: <FaClock className="text-2xl md:text-3xl lg:text-4xl text-orange-500" />,
      title: "Easy Booking",
      description: "Quick and hassle-free reservation process"
    },
    {
      icon: <FaDollarSign className="text-2xl md:text-3xl lg:text-4xl text-orange-500" />,
      title: "Best Prices",
      description: "Competitive rates with no hidden charges"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative Lines - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      <div className="hidden md:block absolute top-4 left-0 w-16 md:w-20 h-16 md:h-20 border-l-2 border-t-2 border-orange-200 rounded-tl-3xl"></div>
      <div className="hidden md:block absolute top-4 right-0 w-16 md:w-20 h-16 md:h-20 border-r-2 border-t-2 border-orange-200 rounded-tr-3xl"></div>

      {/* Background Pattern - Reduced opacity on mobile */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="absolute top-10 left-10 w-32 md:w-40 h-32 md:h-40 border-4 md:border-8 border-orange-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 md:w-60 h-40 md:h-60 border-4 md:border-8 border-orange-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Top Decoration */}
          <div className="flex justify-center items-center gap-1 md:gap-2 mb-3 md:mb-4">
            <div className="w-4 md:w-8 h-0.5 bg-orange-300"></div>
            <div className="w-10 md:w-16 h-0.5 bg-orange-500"></div>
            <div className="w-4 md:w-8 h-0.5 bg-orange-300"></div>
          </div>
          
          <span className="inline-block bg-orange-100 text-orange-600 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 relative">
            <span className="absolute -left-1 md:-left-2 top-1/2 -translate-y-1/2 w-0.5 md:w-1 h-2 md:h-4 bg-orange-500 rounded-full"></span>
            Why Choose Us
            <span className="absolute -right-1 md:-right-2 top-1/2 -translate-y-1/2 w-0.5 md:w-1 h-2 md:h-4 bg-orange-500 rounded-full"></span>
          </span>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Experience Premium Car Rental
            <span className="block md:inline-block mt-1 md:mt-0">
              <span className="hidden md:inline"> </span>
              <span className="relative inline-block">
                Service
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full md:hidden"></span>
              </span>
            </span>
            <span className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-20 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 relative">
            <span className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 text-orange-300 text-lg md:text-2xl">"</span>
            Discover why thousands of customers trust us for their travel needs
            <span className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 text-orange-300 text-lg md:text-2xl">"</span>
          </p>

          {/* Bottom Dots */}
          <div className="flex justify-center gap-1 mt-3 md:mt-4">
            <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
            <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition text-center group relative"
            >
              {/* Corner Lines - Hidden on mobile */}
              <div className="hidden md:block absolute top-2 left-2 w-3 md:w-4 h-3 md:h-4 border-l-2 border-t-2 border-orange-300 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="hidden md:block absolute top-2 right-2 w-3 md:w-4 h-3 md:h-4 border-r-2 border-t-2 border-orange-300 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="hidden md:block absolute bottom-2 left-2 w-3 md:w-4 h-3 md:h-4 border-l-2 border-b-2 border-orange-300 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="hidden md:block absolute bottom-2 right-2 w-3 md:w-4 h-3 md:h-4 border-r-2 border-b-2 border-orange-300 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Icon */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-orange-200 rounded-full scale-0 group-hover:scale-110 transition opacity-20"></div>
                <div className="relative p-3 md:p-4 bg-orange-50 rounded-full mb-3 md:mb-4 group-hover:bg-orange-100 transition">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2 relative">
                {feature.title}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-8 md:group-hover:w-12 transition-all duration-300"></span>
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-10 md:mt-16 bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 relative overflow-hidden">
          {/* Background Design - Reduced on mobile */}
          <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-orange-50 rounded-bl-[50px] md:rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-12 md:w-24 h-12 md:h-24 bg-orange-50 rounded-tr-[40px] md:rounded-tr-[80px] -z-0"></div>

          {/* Header */}
          <div className="text-center mb-4 md:mb-6 lg:mb-8 relative">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
              <div className="w-6 md:w-12 h-0.5 bg-orange-300"></div>
              <span className="text-orange-500 text-xs md:text-sm font-medium">Categories</span>
              <div className="w-6 md:w-12 h-0.5 bg-orange-300"></div>
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1">
              Popular Car Categories
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Choose from our wide range of vehicles
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 relative z-10">
            {['Economy', 'SUV', 'Sedan', 'Luxury', 'Convertible', 'Electric'].map((category, index) => (
              <div key={category} className="relative group cursor-pointer">
                <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded-lg text-center hover:bg-orange-50 transition border border-transparent hover:border-orange-200">
                  <FaCar className="text-orange-400 text-sm md:text-base lg:text-xl mx-auto mb-1 group-hover:text-orange-500 group-hover:scale-110 transition" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">{category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Wave - Hidden on mobile */}
          <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>

        {/* Pricing Card */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white text-center relative overflow-hidden">
          {/* Decorative Elements - Simplified on mobile */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white/30"></div>
          <div className="hidden md:block absolute top-4 left-4 w-12 md:w-16 h-12 md:h-16 border-l-2 border-t-2 border-white/30 rounded-tl-2xl"></div>
          <div className="hidden md:block absolute bottom-4 right-4 w-12 md:w-16 h-12 md:h-16 border-r-2 border-b-2 border-white/30 rounded-br-2xl"></div>
          
          {/* Dots Pattern - Hidden on mobile */}
          <div className="hidden md:flex absolute top-4 md:top-8 right-4 md:right-8 gap-1">
            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 relative inline-block">
            Starting from ₹999/day
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/50"></span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-orange-100 mb-3 md:mb-4">No hidden charges • Free cancellation</p>
          <Link
            to="/cars"
            className="inline-block bg-white text-orange-600 font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-100 transition text-sm md:text-base relative overflow-hidden group"
          >
            <span className="relative z-10">Book Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition"></span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-8 md:mt-12">
          {[
            { number: "15K+", label: "Happy Customers" },
            { number: "150+", label: "Luxury Cars" },
            { number: "4.9", label: "Customer Rating" },
            { number: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="relative inline-block">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 relative">
                  {stat.number}
                  <span className="absolute -top-1 -right-2 w-1 h-1 bg-orange-400 rounded-full"></span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 relative">
                  {stat.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-400 group-hover:w-4 md:group-hover:w-8 transition-all duration-300"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dots */}
        <div className="relative mt-8 md:mt-12">
          <div className="flex justify-center gap-1">
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-200 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-300 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-400 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-500 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-400 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-300 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Lines - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      <div className="hidden md:block absolute bottom-4 left-0 w-16 md:w-20 h-16 md:h-20 border-l-2 border-b-2 border-orange-200 rounded-bl-3xl"></div>
      <div className="hidden md:block absolute bottom-4 right-0 w-16 md:w-20 h-16 md:h-20 border-r-2 border-b-2 border-orange-200 rounded-br-3xl"></div>
    </section>
  );
};

export default FeaturesSection;