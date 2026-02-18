import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FaCar, FaClock, FaMapMarkerAlt, FaHeadset, 
  FaShieldAlt, FaStar, FaUsers, FaAward,
  FaRegHeart, FaRegSmile, FaRegThumbsUp, FaArrowRight,
  FaQuoteRight, FaStarHalfAlt, FaRegStar, FaCity,
  FaMountain, FaUmbrellaBeach, FaLandmark, FaTree,
  FaRoad, FaKey, FaUserFriends, FaGasPump
} from "react-icons/fa";
import { GiSelfLove, GiRoad } from "react-icons/gi";
import abouts from "../assets/cars/auide.png";
import aboutss from "../assets/cars/jagur2.png";
import aboutsss from "../assets/cars/rovers.png";

// Customer Images - High-quality professional photos
const customerImages = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Excellent self-drive experience! Took a Honda City from Mumbai to Lonavala. The car was spotless and pickup was seamless.",
    rating: 5,
    location: "Mumbai → Lonavala",
    trip: "Weekend Getaway"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Rented an SUV for my Manali trip. The self-drive option gave us complete freedom to explore at our own pace. Highly recommended!",
    rating: 5,
    location: "Delhi → Manali",
    trip: "Hill Station Adventure"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Booked a luxury car for my Bangalore to Mysore road trip. The unlimited kilometers option was perfect for our detours.",
    rating: 4.5,
    location: "Bangalore → Mysore",
    trip: "Heritage Tour"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Frequent Traveler",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Self-drive rental from Pune to Goa was the best decision. Stopped at multiple beaches along the way. Car was in perfect condition.",
    rating: 5,
    location: "Pune → Goa",
    trip: "Beach Vacation"
  }
];

// Additional customers for second row
const moreCustomers = [
  {
    id: 5,
    name: "Vikram Singh",
    role: "Hotel Owner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Took a self-drive Thar from Jaipur to Jaisalmer. The desert safari was unforgettable. Great vehicle and excellent support.",
    rating: 5,
    location: "Jaipur → Jaisalmer",
    trip: "Desert Adventure"
  },
  {
    id: 6,
    name: "Anjali Desai",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Self-drive to Udaipur from Ahmedabad. The car was delivered on time and the contactless pickup was very convenient.",
    rating: 5,
    location: "Ahmedabad → Udaipur",
    trip: "Royal Escape"
  },
  {
    id: 7,
    name: "Rajesh Kumar",
    role: "Travel Agent",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Recommend RentRide to all my clients. The self-drive options from Chennai to Pondicherry are very popular. Never had complaints.",
    rating: 4.5,
    location: "Chennai → Pondicherry",
    trip: "Coastal Drive"
  },
  {
    id: 8,
    name: "Kavita Reddy",
    role: "Doctor",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    review: "Hyderabad to Araku Valley self-drive was amazing. The car was well-maintained and sanitized. Will definitely rent again.",
    rating: 5,
    location: "Hyderabad → Araku",
    trip: "Hill Retreat"
  }
];

const About = () => {
  // Slideshow state for hero section
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of hero images
  const heroSlides = [
    { id: 1, image: abouts, alt: "Audi luxury car" },
    { id: 2, image: aboutss, alt: "Jaguar luxury car" },
    { id: 3, image: aboutsss, alt: "Range Rover luxury car" }
  ];

  // Auto slide change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [heroSlides.length]);

  const features = [
    {
      icon: <FaCar className="text-3xl" />,
      title: "Wide Selection",
      description: "150+ premium cars from economy to luxury",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Fast Booking",
      description: "Book your car in under 2 minutes",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "25+ Locations",
      description: "Convenient pickup points across India",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Support",
      description: "Round-the-clock roadside assistance",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { icon: <FaUsers />, value: "15K+", label: "Happy Customers" },
    { icon: <FaCar />, value: "150+", label: "Self-Drive Cars" },
    { icon: <FaStar />, value: "4.9", label: "Customer Rating" },
    { icon: <FaAward />, value: "10+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <FaRegHeart className="text-4xl text-orange-500" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: "Safety Assured",
      description: "All cars fully sanitized and inspected"
    },
    {
      icon: <FaRegSmile className="text-4xl text-orange-500" />,
      title: "Hassle-Free",
      description: "Simple booking with no hidden charges"
    },
    {
      icon: <FaRegThumbsUp className="text-4xl text-orange-500" />,
      title: "Unlimited Kms",
      description: "Drive without worrying about limits"
    }
  ];

  const popularRoutes = [
    { from: "Mumbai", to: "Pune", distance: "150 km", time: "3 hrs", icon: <FaCity /> },
    { from: "Delhi", to: "Jaipur", distance: "280 km", time: "5 hrs", icon: <FaLandmark /> },
    { from: "Bangalore", to: "Mysore", distance: "150 km", time: "3 hrs", icon: <FaCity /> },
    { from: "Chennai", to: "Pondicherry", distance: "160 km", time: "3.5 hrs", icon: <FaUmbrellaBeach /> },
    { from: "Pune", to: "Mahabaleshwar", distance: "120 km", time: "2.5 hrs", icon: <FaMountain /> },
    { from: "Hyderabad", to: "Warangal", distance: "150 km", time: "3 hrs", icon: <FaLandmark /> },
    { from: "Ahmedabad", to: "Vadodara", distance: "110 km", time: "2 hrs", icon: <FaCity /> },
    { from: "Kolkata", to: "Digha", distance: "180 km", time: "4 hrs", icon: <FaUmbrellaBeach /> },
  ];

  const selfDriveBenefits = [
    { icon: <GiRoad />, title: "Drive at Your Pace", description: "No fixed schedules, stop wherever you want" },
    { icon: <FaKey />, title: "Contactless Pickup", description: "Self pick-up and drop-off available" },
    { icon: <FaUserFriends />, title: "Family Friendly", description: "Perfect for group trips and family vacations" },
    { icon: <FaGasPump />, title: "Fuel Efficient", description: "Well-maintained cars for best mileage" },
  ];

  const destinations = [
    { name: "Lonavala", state: "Maharashtra", type: "Hill Station", icon: <FaMountain /> },
    { name: "Goa", state: "Goa", type: "Beach", icon: <FaUmbrellaBeach /> },
    { name: "Manali", state: "Himachal", type: "Hill Station", icon: <FaMountain /> },
    { name: "Udaipur", state: "Rajasthan", type: "Heritage", icon: <FaLandmark /> },
    { name: "Mysore", state: "Karnataka", type: "Heritage", icon: <FaLandmark /> },
    { name: "Pondicherry", state: "Tamil Nadu", type: "Beach", icon: <FaUmbrellaBeach /> },
    { name: "Ooty", state: "Tamil Nadu", type: "Hill Station", icon: <FaMountain /> },
    { name: "Mahabaleshwar", state: "Maharashtra", type: "Hill Station", icon: <FaTree /> },
  ];

  // Rating stars component
  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section with Slideshow */}
      <section className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
        {/* Slideshow Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentSlide ? 1 : 0
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-orange-500 rounded-full' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center space-x-2 text-sm mb-6">
              <Link to="/" className="text-gray-300 hover:text-orange-400 transition">Home</Link>
              <span className="text-gray-500">/</span>
              <span className="text-orange-400">About Us</span>
            </div>

            <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ★ India's #1 Self-Drive Rental
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Journey,
              <span className="block text-orange-400 mt-2">Your Rules</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Experience the freedom of self-drive rentals across India. 
              From Mumbai to Manali, drive wherever your heart takes you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/cars"
                className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition flex items-center"
              >
                Explore Cars
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your component remains exactly the same */}
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-orange-500 text-3xl mb-3 group-hover:scale-110 transition">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              India's Leading
              <span className="block text-orange-500">Self-Drive Rental</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, RentRide has grown from a small local service to one of 
              India's most trusted self-drive car rental platforms. We believe that every journey 
              deserves the freedom to explore at your own pace.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether it's a weekend getaway from Mumbai to Lonavala, a road trip from 
              Delhi to Manali, or a coastal drive from Chennai to Pondicherry - we have 
              the perfect car for your adventure. Our fleet includes everything from 
              economy hatchbacks for city drives to SUVs for mountain terrain.
            </p>

            <div className="space-y-4">
              {['Unlimited kilometers option', 'Free cancellation up to 24 hours', 'Insurance included', '24/7 roadside assistance'].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-orange-100 rounded-2xl p-6 text-center h-40 flex items-center justify-center">
                <FaCar className="text-5xl text-orange-500" />
              </div>
              <div className="bg-blue-100 rounded-2xl p-6 text-center h-40 flex items-center justify-center">
                <FaUsers className="text-5xl text-blue-500" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-green-100 rounded-2xl p-6 text-center h-40 flex items-center justify-center">
                <FaHeadset className="text-5xl text-green-500" />
              </div>
              <div className="bg-purple-100 rounded-2xl p-6 text-center h-40 flex items-center justify-center">
                <FaAward className="text-5xl text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Self-Drive Routes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              🚗 Popular Routes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Loved Self-Drive Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore India at your own pace with our self-drive rentals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-orange-500 text-xl">{route.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800">{route.from} → {route.to}</p>
                    <p className="text-xs text-gray-500">{route.distance} • {route.time}</p>
                  </div>
                </div>
                <Link to="/cars" className="text-[10px] text-orange-500 hover:underline block text-right">
                  Rent Cars →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Drive Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Self-Drive?</h2>
            <p className="text-gray-600">Freedom, flexibility, and fun - all in one package</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {selfDriveBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500 transition-colors">
                  <div className="text-orange-500 text-2xl group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              📍 Explore India
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Self-Drive Destinations</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="text-orange-500 text-xl">{dest.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800">{dest.name}</p>
                    <p className="text-xs text-gray-500">{dest.state} • {dest.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              ★ Self-Drive Stories
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real self-drive experiences from across India
            </p>
          </div>

          {/* First Row - 4 Customers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {customerImages.map((customer) => (
              <div
                key={customer.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-gray-100">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
                    loading="lazy"
                  />
                  
                  {/* Trip Badge */}
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-medium shadow-sm">
                    {customer.trip}
                  </div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium text-gray-700 shadow-sm">
                    📍 {customer.location}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <FaQuoteRight className="text-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <RatingStars rating={customer.rating} />
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {customer.rating}
                    </span>
                  </div>
                  
                  {/* Review */}
                  <p className="text-gray-600 text-xs mb-3 line-clamp-3 italic">
                    "{customer.review}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-xs">{customer.name}</h3>
                      <p className="text-[10px] text-orange-500">{customer.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 4 More Customers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreCustomers.map((customer) => (
              <div
                key={customer.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-gray-100">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
                    loading="lazy"
                  />
                  
                  {/* Trip Badge */}
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-medium shadow-sm">
                    {customer.trip}
                  </div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium text-gray-700 shadow-sm">
                    📍 {customer.location}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <FaQuoteRight className="text-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <RatingStars rating={customer.rating} />
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {customer.rating}
                    </span>
                  </div>
                  
                  {/* Review */}
                  <p className="text-gray-600 text-xs mb-3 line-clamp-3 italic">
                    "{customer.review}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-xs">{customer.name}</h3>
                      <p className="text-[10px] text-orange-500">{customer.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Road Trip
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg text-white mb-3 shadow-md group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-sm text-gray-600">The principles that guide every journey</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition border border-gray-100">
                <div className="inline-block p-3 bg-orange-50 rounded-full mb-3">
                  {value.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">{value.title}</h3>
                <p className="text-[10px] text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-orange-100 mb-6">
            Join 15,000+ travelers who've explored India with RentRide
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/cars"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg text-sm transition shadow-lg hover:shadow-xl hover:bg-gray-100"
            >
              Browse Self-Drive Cars
            </Link>
            <Link
              to="/register"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition shadow-lg hover:shadow-xl"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;