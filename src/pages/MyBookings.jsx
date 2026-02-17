import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCar, FaCalendarAlt, FaRupeeSign, 
  FaTrash, FaPlus, FaInfoCircle, FaClock,
  FaUser, FaBuilding, FaCalendarCheck, FaArrowLeft
} from 'react-icons/fa';

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedBooking, setExpandedBooking] = useState(null);

  // Load bookings from localStorage when component mounts
  useEffect(() => {
    try {
      const savedBookings = localStorage.getItem('bookings');
      console.log('Raw localStorage data:', savedBookings); // Debug log
      
      const parsedBookings = savedBookings ? JSON.parse(savedBookings) : [];
      console.log('Parsed bookings:', parsedBookings); // Debug log
      
      // Ensure we have an array
      setBookings(Array.isArray(parsedBookings) ? parsedBookings : []);
    } catch (error) {
      console.error('Error loading bookings:', error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCancelBooking = (bookingId, carName) => {
    if (window.confirm(`Are you sure you want to cancel booking for ${carName}?`)) {
      try {
        const updatedBookings = bookings.filter(booking => booking.bookingId !== bookingId);
        setBookings(updatedBookings);
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        alert('Booking cancelled successfully');
      } catch (error) {
        console.error('Error cancelling booking:', error);
        alert('Error cancelling booking');
      }
    }
  };

  const handleDeleteAllBookings = () => {
    if (bookings.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ALL ${bookings.length} bookings? This action cannot be undone.`)) {
      try {
        setBookings([]);
        localStorage.removeItem('bookings');
        alert('All bookings deleted successfully');
      } catch (error) {
        console.error('Error deleting all bookings:', error);
        alert('Error deleting bookings');
      }
    }
  };

  const toggleExpand = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-3 text-sm text-gray-600">Loading your bookings...</p>
        </div>
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-sm w-full">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="bg-orange-50 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCar className="h-8 w-8 sm:h-10 sm:w-10 text-orange-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">No Bookings Yet</h2>
            <p className="text-sm text-gray-600 mb-6 px-2">
              You haven't booked any cars. Browse our collection and book your favorite car!
            </p>
            <button
              onClick={() => navigate('/cars')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl transition text-sm font-medium flex items-center justify-center gap-2"
            >
              <FaPlus className="text-xs" />
              Browse Cars
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button and Delete All */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-2 p-2 hover:bg-gray-200 rounded-lg transition md:hidden"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-gray-600 text-sm" />
            </button>
            <div className="flex items-center">
              <div className="h-6 sm:h-8 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full mr-2 sm:mr-3"></div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">My Bookings</h1>
              <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">
                {bookings.length} {bookings.length === 1 ? 'booking' : 'bookings'}
              </span>
            </div>
          </div>
          
          {/* Delete All Button */}
          {bookings.length > 0 && (
            <button
              onClick={handleDeleteAllBookings}
              className="flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition text-xs sm:text-sm font-medium border border-red-200 gap-1.5 w-full sm:w-auto"
            >
              <FaTrash className="text-xs sm:text-sm" />
              <span>Delete All</span>
            </button>
          )}
        </div>
        
        {/* Bookings Grid - Optimized for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.bookingId || booking.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Compact Card Layout */}
              <div className="flex flex-col">
                {/* Image and Basic Info Row */}
                <div className="flex p-3 sm:p-4 gap-3">
                  {/* Image - Fixed size */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={booking.img}
                      alt={booking.name || 'Car'}
                      className="h-full w-full object-contain p-1"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/100x80?text=Car';
                      }}
                    />
                    {/* Status Badge */}
                    <div className="absolute top-1 left-1">
                      <span className="text-[8px] font-medium px-1.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate mb-1">
                      {booking.name || 'Unknown Car'}
                    </h3>
                    
                    <div className="space-y-1">
                      <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
                        <FaBuilding className="mr-1 flex-shrink-0" />
                        <span className="truncate">{booking.company || 'N/A'}</span>
                      </div>
                      <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
                        <FaCalendarCheck className="mr-1 flex-shrink-0" />
                        <span className="truncate">{formatDate(booking.startDate || booking.bookingDate)}</span>
                      </div>
                      <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
                        <FaClock className="mr-1 flex-shrink-0" />
                        <span className="truncate">{booking.totalDays || 1} days</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-2">
                      <span className="text-sm sm:text-base font-bold text-orange-600">
                        ₹{(booking.totalPrice || booking.price || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                {expandedBooking === (booking.bookingId || booking.id) && (
                  <div className="px-3 pb-3 sm:px-4 sm:pb-4 border-t border-gray-100 mt-2 pt-2">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-gray-500 text-[10px]">Model</p>
                        <p className="font-medium text-gray-700 truncate">{booking.model || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-gray-500 text-[10px]">End Date</p>
                        <p className="font-medium text-gray-700">{formatDate(booking.endDate || booking.returnDate)}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-gray-500 text-[10px]">Booked On</p>
                        <p className="font-medium text-gray-700">{formatDate(booking.bookingDate)}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-gray-500 text-[10px]">Booking ID</p>
                        <p className="font-medium text-gray-700 text-[8px] truncate">#{String(booking.bookingId || booking.id).slice(-8)}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex border-t border-gray-100">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleCancelBooking(booking.bookingId || booking.id, booking.name)}
                    className="flex-1 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-red-600 hover:bg-red-50 transition flex items-center justify-center gap-1.5 border-r border-gray-100"
                  >
                    <FaTrash className="text-xs" />
                    <span>Delete</span>
                  </button>
                  
                  {/* View Details / Browse More Button */}
                  <button
                    onClick={() => toggleExpand(booking.bookingId || booking.id)}
                    className="flex-1 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-1.5"
                  >
                    <FaInfoCircle className="text-xs" />
                    <span>{expandedBooking === (booking.bookingId || booking.id) ? 'Less' : 'Details'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary Section - Optimized for mobile */}
        <div className="mt-6 sm:mt-8 lg:mt-10 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="h-5 sm:h-6 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full mr-2"></div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Booking Summary</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Total Bookings</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">{bookings.length}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Total Amount</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">
                ₹{bookings.reduce((sum, booking) => sum + (booking.totalPrice || booking.price || 0), 0).toLocaleString()}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Total Days</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600">
                {bookings.reduce((sum, booking) => sum + (booking.totalDays || 1), 0)}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Active</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600">{bookings.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Padding for better scrolling */}
      <div className="h-4 sm:h-0"></div>
    </div>
  );
};

export default MyBookings;