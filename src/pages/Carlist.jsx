import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsHero from "../components/CarHero";
import { 
  FaSearch, FaFilter, FaTimes, FaCar, FaGasPump,
  FaCogs, FaUsers, FaCalendarAlt, FaRupeeSign,
  FaStar, FaHeart, FaRegHeart
} from "react-icons/fa";

// ================= CAR IMAGES =================
import car1 from "../assets/cars/car1.png";
import car2 from "../assets/cars/car2.png";
import car3 from "../assets/cars/car3.png";
import car4 from "../assets/cars/car4.png";
import car5 from "../assets/cars/car5.png";
import car6 from "../assets/cars/car6.png";
import car7 from "../assets/cars/car7.png";
import car8 from "../assets/cars/car8.png";
import car9 from "../assets/cars/car11.png";
import car10 from "../assets/cars/car12.png";
import car11 from "../assets/cars/mahi.png";
import car12 from "../assets/cars/mahi2.png";
import car13 from "../assets/cars/auide.png";
import car14 from "../assets/cars/bmmws.png";
import car15 from "../assets/cars/mus.png";
import car16 from "../assets/cars/rovers.png";
import car17 from "../assets/cars/jagur.png";
import car18 from "../assets/cars/jagur2.png";
import car19 from "../assets/cars/lex.png";
import car20 from "../assets/cars/lex2.png";
import car21 from "../assets/cars/susui.png";

// ================= BRAND LOGOS =================
import woogan from "../assets/cars/logos/woolwagen.png";
import tata from "../assets/cars/logos/tata.png";
import susuki from "../assets/cars/logos/suzuki.png";
import mahindra from "../assets/cars/logos/mahi.png";
import hundai from "../assets/cars/logos/hundai.png";
import toyato from "../assets/cars/logos/toyato.png";
import audis from "../assets/cars/logos/audi.png";
import bmw from "../assets/cars/logos/bmws.png";
import mustache from "../assets/cars/logos/mustachee.png";
import ran from "../assets/cars/logos/ran.png";
import jagur from "../assets/cars/logos/jagurs.png";
import lexus from "../assets/cars/logos/lexus.png";

const Carlist = () => {  // Changed from Carlist to Cars
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [bookingDates, setBookingDates] = useState({
    startDate: '',
    endDate: ''
  });

  // Filter states
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Color options
  const colorOptions = [
    { name: "White", class: "bg-white border border-gray-300" },
    { name: "Black", class: "bg-gray-900" },
    { name: "Silver", class: "bg-gray-400" },
    { name: "Red", class: "bg-red-600" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Gray", class: "bg-gray-500" },
  ];

  // Fuel type options
  const fuelOptions = ["Petrol", "Diesel", "CNG", "Electric"];
  
  // Seat options
  const seatOptions = [2, 4, 5, 6, 7, 8];
  
  // Transmission options
  const transmissionOptions = ["Manual", "Automatic"];

  // ================= CAR DATA =================
  const [carsData, setCarsData] = useState([
    { id: 1, name: "Volkswagen Polo", model: "Sedan", price: 6000, status: "Available", company: "Volkswagen", img: car9, color: "White", fuel: "Petrol", seats: 5, transmission: "Manual", rating: 4.5, trips: 120 },
    { id: 2, name: "Tata Nexon", model: "SUV", price: 5000, status: "Booked", company: "Tata", img: car4, color: "Blue", fuel: "Diesel", seats: 5, transmission: "Manual", rating: 4.3, trips: 85 },
    { id: 3, name: "Suzuki Swift", model: "Hatchback", price: 5500, status: "Available", company: "Suzuki", img: car7, color: "Red", fuel: "Petrol", seats: 5, transmission: "Manual", rating: 4.4, trips: 200 },
    { id: 4, name: "Mahindra XUV", model: "Luxury", price: 5000, status: "Unavailable", company: "Mahindra", img: car11, color: "Black", fuel: "Diesel", seats: 7, transmission: "Manual", rating: 4.6, trips: 150 },
    { id: 5, name: "Hyundai Creta", model: "SUV", price: 6500, status: "Available", company: "Hyundai", img: car1, color: "Silver", fuel: "Petrol", seats: 5, transmission: "Automatic", rating: 4.7, trips: 180 },
    { id: 6, name: "Mahindra XUV", model: "Luxury", price: 8000, status: "Unavailable", company: "Mahindra", img: car12, color: "Gray", fuel: "Diesel", seats: 7, transmission: "Automatic", rating: 4.5, trips: 90 },
    { id: 7, name: "Audi A6", model: "Luxury", price: 12000, status: "Available", company: "Audi", img: car13, color: "White", fuel: "Petrol", seats: 5, transmission: "Automatic", rating: 4.9, trips: 75 },
    { id: 8, name: "BMW X5", model: "Luxury", price: 20000, status: "Booked", company: "BMW", img: car14, color: "Black", fuel: "Diesel", seats: 5, transmission: "Automatic", rating: 4.9, trips: 60 },
    { id: 9, name: "Mercedes C-Class", model: "Luxury", price: 13500, status: "Available", company: "Mercedes", img: car15, color: "Silver", fuel: "Petrol", seats: 5, transmission: "Automatic", rating: 4.8, trips: 55 },
    { id: 10, name: "Range Rover Evoque", model: "Luxury", price: 15000, status: "Available", company: "Range Rover", img: car16, color: "Gray", fuel: "Diesel", seats: 5, transmission: "Automatic", rating: 4.8, trips: 45 },
    { id: 11, name: "Hyundai i20", model: "Hatchback", price: 7000, status: "Available", company: "Hyundai", img: car3, color: "Red", fuel: "Petrol", seats: 5, transmission: "Manual", rating: 4.4, trips: 220 },
    { id: 12, name: "Toyota Corolla", model: "Sedan", price: 7500, status: "Unavailable", company: "Toyota", img: car5, color: "White", fuel: "Petrol", seats: 5, transmission: "Manual", rating: 4.5, trips: 130 },
    { id: 13, name: "Toyota Urban", model: "SUV", price: 7000, status: "Available", company: "Toyota", img: car2, color: "Blue", fuel: "Diesel", seats: 5, transmission: "Automatic", rating: 4.5, trips: 110 },
    { id: 14, name: "Suzuki Swift", model: "Hatchback", price: 4500, status: "Available", company: "Suzuki", img: car8, color: "Silver", fuel: "CNG", seats: 5, transmission: "Manual", rating: 4.3, trips: 250 },
    { id: 15, name: "Volkswagen Polo", model: "Sedan", price: 6500, status: "Available", company: "Volkswagen", img: car10, color: "Black", fuel: "Diesel", seats: 5, transmission: "Manual", rating: 4.5, trips: 140 },
    { id: 16, name: "Tata Nexon", model: "SUV", price: 5200, status: "Booked", company: "Tata", img: car6, color: "Red", fuel: "Petrol", seats: 5, transmission: "Manual", rating: 4.3, trips: 95 },
    { id: 17, name: "Lexus ES", model: "Luxury", price: 15000, status: "Available", company: "Lexus", img: car19, color: "White", fuel: "Petrol", seats: 5, transmission: "Automatic", rating: 4.8, trips: 40 },
    { id: 18, name: "Jaguar XJ", model: "Luxury", price: 18000, status: "Booked", company: "Jaguar", img: car17, color: "Black", fuel: "Petrol", seats: 5, transmission: "Automatic", rating: 4.8, trips: 35 },
    { id: 19, name: "Suzuki WagonR", model: "Hatchback", price: 4500, status: "Available", company: "Suzuki", img: car21, color: "Blue", fuel: "CNG", seats: 5, transmission: "Manual", rating: 4.2, trips: 300 },
    { id: 20, name: "Jaguar F-Pace", model: "SUV", price: 16000, status: "Available", company: "Jaguar", img: car18, color: "Gray", fuel: "Diesel", seats: 5, transmission: "Automatic", rating: 4.7, trips: 30 },
    { id: 21, name: "Lexus LM", model: "Luxury", price: 14500, status: "Booked", company: "Lexus", img: car20, color: "Silver", fuel: "Petrol", seats: 7, transmission: "Automatic", rating: 4.8, trips: 25 },
  ]);

  // ================= BRAND ARRAYS =================
  const normalLogos = [
    { name: "Volkswagen", logo: woogan },
    { name: "Tata", logo: tata },
    { name: "Suzuki", logo: susuki },
    { name: "Mahindra", logo: mahindra },
    { name: "Hyundai", logo: hundai },
    { name: "Toyota", logo: toyato },
  ];

  const premiumLogos = [
    { name: "Audi", logo: audis },
    { name: "BMW", logo: bmw },
    { name: "Mercedes", logo: mustache },
    { name: "Range Rover", logo: ran },
    { name: "Jaguar", logo: jagur },
    { name: "Lexus", logo: lexus },
  ];

  // ================= FILTER FUNCTIONS =================
  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleFuel = (fuel) => {
    setSelectedFuelTypes(prev =>
      prev.includes(fuel)
        ? prev.filter(f => f !== fuel)
        : [...prev, fuel]
    );
  };

  const toggleSeats = (seats) => {
    setSelectedSeats(prev =>
      prev.includes(seats)
        ? prev.filter(s => s !== seats)
        : [...prev, seats]
    );
  };

  const clearFilters = () => {
    setSelectedCompany("");
    setPriceRange({ min: 0, max: 50000 });
    setSelectedColors([]);
    setSelectedFuelTypes([]);
    setSelectedSeats([]);
    setSelectedTransmission("");
    setSortBy("");
    setSearchTerm("");
  };

  // ================= FILTER LOGIC =================
  const filteredCars = carsData
    .filter((car) => {
      // Search filter
      if (searchTerm && !car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Company filter
      if (selectedCompany && car.company !== selectedCompany) {
        return false;
      }
      
      // Price filter
      if (car.price < priceRange.min || car.price > priceRange.max) {
        return false;
      }
      
      // Color filter
      if (selectedColors.length > 0 && !selectedColors.includes(car.color)) {
        return false;
      }
      
      // Fuel filter
      if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.fuel)) {
        return false;
      }
      
      // Seats filter
      if (selectedSeats.length > 0 && !selectedSeats.includes(car.seats)) {
        return false;
      }
      
      // Transmission filter
      if (selectedTransmission && car.transmission !== selectedTransmission) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  // ================= BOOKING FUNCTION =================
  const openDateModal = (car) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      alert("Please login to book a car");
      navigate("/login");
      return;
    }
    
    setSelectedCar(car);
    setShowDateModal(true);
    const today = new Date().toISOString().split('T')[0];
    setBookingDates({
      startDate: today,
      endDate: ''
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setBookingDates(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const confirmBooking = () => {
    if (!bookingDates.startDate || !bookingDates.endDate) {
      alert('Please select both start and end dates');
      return;
    }

    if (new Date(bookingDates.endDate) <= new Date(bookingDates.startDate)) {
      alert('End date must be after start date');
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    
    const start = new Date(bookingDates.startDate);
    const end = new Date(bookingDates.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = selectedCar.price * days;
    
    const newBooking = {
      ...selectedCar,
      bookingId: Date.now(),
      startDate: bookingDates.startDate,
      endDate: bookingDates.endDate,
      totalDays: days,
      totalPrice: totalPrice,
      bookingDate: new Date().toLocaleDateString(),
    };
    
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));
    
    const updatedCars = carsData.map((car) =>
      car.id === selectedCar.id ? { ...car, status: "Booked" } : car
    );
    setCarsData(updatedCars);

    setShowDateModal(false);
    alert(`${selectedCar.name} Booked Successfully! ✅\nTotal: ₹${totalPrice} for ${days} days`);
    navigate('/bookings');
  };

  const toggleFavorite = (carId) => {
    setFavorites(prev =>
      prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case "Available":
        return "bg-emerald-50 text-emerald-600 border border-emerald-200";
      case "Booked":
        return "bg-amber-50 text-amber-600 border border-amber-200";
      case "Unavailable":
        return "bg-rose-50 text-rose-600 border border-rose-200";
      default:
        return "bg-gray-50 text-gray-600 border border-gray-200";
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CarsHero />

      <section className="py-4 px-3 sm:px-4 lg:px-6 max-w-7xl mx-auto">
        {/* Search and Filter Bar - Mobile Optimized */}
        <div className="mb-4 flex flex-row gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
              <FaSearch className="h-3.5 w-3.5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full pl-8 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-3 py-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition ${
              showFilters ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <FaFilter className="text-xs" />
            <span className="hidden xs:inline">Filter</span>
            {(selectedColors.length > 0 || selectedFuelTypes.length > 0 || selectedSeats.length > 0 || selectedTransmission || priceRange.min > 0 || priceRange.max < 50000) && (
              <span className="ml-0.5 bg-orange-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                {selectedColors.length + selectedFuelTypes.length + selectedSeats.length + (selectedTransmission ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Filters Panel - Mobile Optimized */}
        {showFilters && (
          <div className="mb-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-slideDown">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">Filter Cars</h3>
              <button
                onClick={clearFilters}
                className="text-xs text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1"
              >
                <FaTimes className="text-[10px]" />
                Clear All
              </button>
            </div>

            <div className="space-y-4">
              {/* Price Range Filter */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Price Range (per day)</h4>
                <div className="space-y-1">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="w-full accent-orange-500 h-1.5"
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">₹{priceRange.min}</span>
                    <span className="text-gray-600">₹{priceRange.max}+</span>
                  </div>
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`w-7 h-7 rounded-full ${color.class} ${
                        selectedColors.includes(color.name)
                          ? 'ring-2 ring-orange-500 ring-offset-2'
                          : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1'
                      } transition`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Fuel Type Filter */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Fuel Type</h4>
                <div className="flex flex-wrap gap-1.5">
                  {fuelOptions.map((fuel) => (
                    <button
                      key={fuel}
                      onClick={() => toggleFuel(fuel)}
                      className={`px-2 py-1 text-xs rounded-full border transition ${
                        selectedFuelTypes.includes(fuel)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seats Filter */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Seats</h4>
                <div className="flex flex-wrap gap-1.5">
                  {seatOptions.map((seats) => (
                    <button
                      key={seats}
                      onClick={() => toggleSeats(seats)}
                      className={`px-2 py-1 text-xs rounded-full border transition ${
                        selectedSeats.includes(seats)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {seats} Seats
                    </button>
                  ))}
                </div>
              </div>

              {/* Transmission Filter */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Transmission</h4>
                <div className="flex gap-1.5">
                  {transmissionOptions.map((trans) => (
                    <button
                      key={trans}
                      onClick={() => setSelectedTransmission(selectedTransmission === trans ? "" : trans)}
                      className={`px-3 py-1 text-xs rounded-full border transition ${
                        selectedTransmission === trans
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {trans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-400 outline-none bg-white"
                >
                  <option value="">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Brands Section - Mobile Optimized */}
        <div className="space-y-4 mb-6">
          {[
            { title: "Popular Brands", data: normalLogos, gradient: "from-blue-500 to-blue-600" },
            { title: "Premium Brands", data: premiumLogos, gradient: "from-purple-500 to-purple-600" }
          ].map((section) => (
            <div key={section.title} className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
              <div className="flex items-center mb-2">
                <div className={`h-5 w-1 bg-gradient-to-b ${section.gradient} rounded-full mr-2`}></div>
                <h2 className="text-sm font-semibold text-gray-800">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {section.data.map((brand) => (
                  <div
                    key={brand.name}
                    onClick={() => setSelectedCompany(selectedCompany === brand.name ? "" : brand.name)}
                    className={`
                      cursor-pointer group relative
                      ${selectedCompany === brand.name 
                        ? 'ring-2 ring-orange-400 ring-offset-2' 
                        : 'hover:ring-2 hover:ring-gray-200 hover:ring-offset-2'
                      }
                      transition-all duration-200 rounded-lg
                    `}
                  >
                    <div className={`
                      flex flex-col items-center p-1.5 bg-white rounded-lg
                      ${selectedCompany === brand.name 
                        ? 'shadow-md' 
                        : 'shadow-sm group-hover:shadow'
                      }
                      transition-all
                    `}>
                      <div className="h-7 w-7 flex items-center justify-center mb-0.5">
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="max-h-5 max-w-5 object-contain"
                        />
                      </div>
                      <span className="text-[9px] font-medium text-gray-700 text-center leading-tight">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cars Grid - Mobile Optimized */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="h-5 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full mr-2"></div>
              <h2 className="text-base font-bold text-gray-800">Available Cars</h2>
            </div>
            <span className="text-[10px] font-medium text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">
              {filteredCars.length} cars
            </span>
          </div>

          {filteredCars.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-xl">
              <FaCar className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-xs mb-2">No cars match your filters</p>
              <button 
                onClick={clearFilters}
                className="text-xs text-orange-500 hover:text-orange-600 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-28 bg-gradient-to-br from-gray-50 to-gray-100 p-2">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onClick={() => openDateModal(car)}
                    />
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(car.id)}
                      className="absolute top-1 left-1 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition"
                    >
                      {favorites.includes(car.id) ? (
                        <FaHeart className="text-red-500 text-[10px]" />
                      ) : (
                        <FaRegHeart className="text-gray-600 text-[10px]" />
                      )}
                    </button>

                    {/* Status Badge */}
                    <div className="absolute top-1 right-1">
                      <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full ${getStatusStyle(car.status)}`}>
                        {car.status}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-sm text-white text-[7px] px-1 py-0.5 rounded-full flex items-center gap-0.5">
                      <FaStar className="text-yellow-400 text-[6px]" />
                      {car.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-2">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 text-[11px] leading-tight line-clamp-1">{car.name}</h3>
                      <span className="text-[7px] text-gray-400 bg-gray-100 px-1 py-0.5 rounded-full whitespace-nowrap ml-1">
                        {car.trips} trips
                      </span>
                    </div>
                    
                    {/* Car Details */}
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <div className="flex items-center gap-1 text-[8px] text-gray-500">
                        <FaCogs className="text-[7px]" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[8px] text-gray-500">
                        <FaGasPump className="text-[7px]" />
                        <span className="truncate">{car.fuel}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[8px] text-gray-500">
                        <FaUsers className="text-[7px]" />
                        <span className="truncate">{car.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1 text-[8px] text-gray-500">
                        <div className={`w-2 h-2 rounded-full ${car.color === 'White' ? 'bg-white border border-gray-300' : ''} ${
                          car.color === 'Black' ? 'bg-gray-900' :
                          car.color === 'Silver' ? 'bg-gray-400' :
                          car.color === 'Red' ? 'bg-red-600' :
                          car.color === 'Blue' ? 'bg-blue-600' :
                          car.color === 'Gray' ? 'bg-gray-500' : ''
                        }`}></div>
                        <span className="truncate">{car.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <span className="text-sm font-bold text-orange-500">₹{car.price.toLocaleString()}</span>
                        <span className="text-[7px] text-gray-400 ml-0.5">/day</span>
                      </div>
                      
                      {car.status === "Available" ? (
                        <button
                          onClick={() => openDateModal(car)}
                          className="text-[9px] bg-orange-500 hover:bg-orange-600 text-white px-2 py-1.5 rounded-lg transition-colors shadow-sm font-medium"
                        >
                          Book
                        </button>
                      ) : (
                        <button
                          disabled
                          className="text-[9px] bg-gray-100 text-gray-400 px-2 py-1.5 rounded-lg cursor-not-allowed"
                        >
                          {car.status}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Date Selection Modal - Mobile Optimized */}
      {showDateModal && selectedCar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 rounded-t-xl">
              <h3 className="text-base font-semibold text-white">Select Dates</h3>
              <p className="text-orange-100 text-xs mt-0.5">{selectedCar.name} • ₹{selectedCar.price}/day</p>
            </div>
            
            {/* Modal Body */}
            <div className="p-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    min={today}
                    value={bookingDates.startDate}
                    onChange={handleDateChange}
                    className="w-full px-3 py-2.5 text-xs border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    min={bookingDates.startDate || today}
                    value={bookingDates.endDate}
                    onChange={handleDateChange}
                    className="w-full px-3 py-2.5 text-xs border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                  />
                </div>

                {bookingDates.startDate && bookingDates.endDate && (
                  <div className="bg-orange-50 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Booking Summary</h4>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium text-gray-800">
                          {Math.ceil((new Date(bookingDates.endDate) - new Date(bookingDates.startDate)) / (1000 * 60 * 60 * 24))} days
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price per day:</span>
                        <span className="font-medium text-gray-800">₹{selectedCar.price}</span>
                      </div>
                      <div className="border-t border-orange-200 my-1.5 pt-1.5 flex justify-between">
                        <span className="font-semibold text-gray-700">Total:</span>
                        <span className="font-bold text-orange-600">
                          ₹{Math.ceil((new Date(bookingDates.endDate) - new Date(bookingDates.startDate)) / (1000 * 60 * 60 * 24)) * selectedCar.price}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={confirmBooking}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setShowDateModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
        }

        /* Line clamp utility */
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </div>
  );
};

export default Carlist;  // Changed from Carlist to Cars