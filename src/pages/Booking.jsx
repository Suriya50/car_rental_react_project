import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state;

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [locationInput, setLocationInput] = useState("");

  if (!car) {
    return <p className="text-center mt-20">No Car Selected</p>;
  }

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 0;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const totalDays = calculateDays();
  const totalAmount = totalDays * car.price;

  const handleConfirmBooking = () => {
    if (!pickupDate || !returnDate || !locationInput) {
      alert("Please fill all fields");
      return;
    }

    const bookingData = {
      carName: car.name,
      model: car.model,
      pricePerDay: car.price,
      pickupDate,
      returnDate,
      location: locationInput,
      totalAmount,
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(bookingData);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert("Booking Confirmed!");
    navigate("/my-bookings");
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Booking Details
      </h2>

      <div className="bg-white shadow rounded-xl p-6 grid md:grid-cols-2 gap-8">

        {/* Car Details */}
        <div>
          <img
            src={car.img}
            alt={car.name}
            className="h-48 mx-auto object-contain mb-4"
          />
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <p>Model: {car.model}</p>
          <p className="text-orange-600 font-semibold">
            ₹ {car.price} / day
          </p>
        </div>

        {/* Booking Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full border p-3 rounded"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />

          <input
            type="date"
            className="w-full border p-3 rounded"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />

          <input
            type="date"
            className="w-full border p-3 rounded"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />

          <div className="bg-gray-100 p-4 rounded">
            <p>Total Days: {totalDays}</p>
            <p className="font-semibold">
              Total Amount: ₹ {totalAmount.toLocaleString()}
            </p>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
          >
            Confirm Booking
          </button>
        </div>

      </div>
    </div>
  );
};

export default Booking;
