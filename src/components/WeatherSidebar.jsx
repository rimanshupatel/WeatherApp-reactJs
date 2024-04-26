/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCloudsFill } from "react-icons/bs";
export default function WeatherSidebar({
  celcius,
  name,
  weather,
  country,
  hours,
  minutes,
  weekday,
  date,
  month,
  years,
  handleCity,
}) {
  const [city, setCity] = useState("");

  let [timerId, setTimerId] = useState(null);
  const handleClick = () => {
    handleCity(city);
  };

  const setHandler = (e) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const newCity = e.target.value;
    setCity(newCity);

    const newTimerId = setTimeout(() => {
      handleCity(newCity); // Pass the current city value here
    }, 100);

    setTimerId(newTimerId);
  };

  return (
    <div className="h-full w-4/12 px-8 shadow-box rounded-lg py-8  ">
      {/* input-section */}
      <div className="relative">
        <button
          className="absolute p-[10px] text-xl bg-black text-white rounded-l-3xl"
          onClick={handleClick}
        >
          <IoSearchOutline />
        </button>
        <input
          type="text"
          placeholder="Search for a city..."
          className=" py-2 px-12  rounded-full shadow-box outline-none "
          value={city}
          onChange={setHandler}
        />
      </div>
      {/* main-weather-component */}
      <div className="py-10 border-b-2 border-gray-200 ">
        <span className="text-8xl">
          <BsCloudsFill />
        </span>
        <p className="text-6xl font-light py-4">{celcius}°</p>
        <p className="text-2xl">{weather}</p>
      </div>
      {/* address-component */}

      <div className="flex flex-col justify-between h-52 ">
        <div>
          <p className="text-xl font-semibold py-3">
            {weekday}, {hours}: {minutes}
          </p>
          <span className="text-lg">
            {month} {date}, {years}
          </span>
        </div>
        <div className="w-full">
          <h1
            className="py-6 text-2xl text-center shadow-box rounded-xl"
            style={{ backgroundColor: "#ffffff5c" }}
          >
            {name}, {country}
          </h1>
        </div>
      </div>
    </div>
  );
}
