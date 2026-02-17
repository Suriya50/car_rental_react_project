const CarCard = ({ car }) => {
  if (!car) return null;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col">
      {/* Car Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Car Info */}
      <div className="p-4 flex flex-col items-center text-center flex-1">
        {/* Company Logo */}
        <img
          src={car.logo}
          alt={car.company}
          className="w-12 h-12 object-contain mb-2"
        />

        {/* Car Name */}
        <h3 className="font-semibold text-lg mb-2">{car.name}</h3>

        {/* Price */}
        <p className="text-orange-500 font-bold mb-4">${car.price}/day</p>

        {/* Book Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-auto">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
