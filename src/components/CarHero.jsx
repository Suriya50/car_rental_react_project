import { useState, useEffect, useRef } from "react";
import carHero1 from "../assets/cars/car2.png";
import carHero2 from "../assets/cars/car11.png";
import carHero3 from "../assets/cars/car4.png";

const heroCars = [carHero1, carHero2, carHero3];

const CarsHero = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlider();

    return () => stopSlider();
  }, []);

  const startSlider = () => {
    stopSlider(); // clear if already running
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroCars.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section className="w-full flex justify-center mb-10">
      <div className="relative w-[95%] md:w-[90%] h-[55vh] md:h-[65vh]
                      overflow-hidden rounded-3xl border border-gray-200
                      shadow-2xl bg-gradient-to-br rounded from-gray-900 via-black to-gray-800">

        {/* SLIDER */}
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {heroCars.map((car, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center"
            >
              <img
                src={car}
                alt="car"
                className="h-[75%] rounded object-contain drop-shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Drive Your Dream Car
          </h1>
          <p className="text-gray-300 mt-3 text-sm md:text-lg">
            Luxury • Comfort • Affordable
          </p>

          <button className="mt-6 bg-orange-600 hover:bg-orange-700 
                             text-white px-6 py-2 rounded-full transition">
            Explore Cars
          </button>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-5 w-full flex justify-center gap-3">
          {heroCars.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer transition-all duration-300 
                ${current === index
                  ? "w-6 h-3 bg-orange-500 rounded-full"
                  : "w-3 h-3 bg-gray-400 rounded-full"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsHero;
