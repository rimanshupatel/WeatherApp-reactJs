// import React from 'react'
import axios from "axios";
import WeatherSidebar from "./WeatherSidebar";
import WeatherMain from "./WeatherMain";
import { useState, useEffect } from "react";

export default function Weather() {
  const [data, setData] = useState({
    celcius: 10,
    weather: "",
    name: "",
    country: "",
    humidity: "",
    windSpeed: "",
    Pressure: "",
  });
  const [celciusData, setCelciusData] = useState("");
  const [mainTempVal, setMainTempVal] = useState({});
  const [weatherTime, setWeatherTime] = useState({});
  const [newCity, setNewCity] = useState("republic of india");
  const WeatherData = async (city) => {
    try {
      let apiKey = "3e77016c422582d8edeb05dfd7dc118d";
      const weatherValue = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        // `https://api.openweathermap.org/data/2.5/weather?q=republic of india&appid=${apiKey}`
      );
      setCelciusData(weatherValue.data.main.temp);
      setMainTempVal(weatherValue.data.main);

      setData({
        weather: weatherValue.data.weather[0].description,
        name: weatherValue.data.name,
        country: weatherValue.data.sys.country,
        humidity: weatherValue.data.main.humidity,
        windSpeed: weatherValue.data.wind.speed,
        Pressure: weatherValue.data.main.pressure,
      });
      setWeatherTime(weatherValue.data.sys);
      console.log(weatherValue);
    } catch (err) {
      console.log(err);
    }
  };
  let handleCity = (city) => {
    setNewCity(city);
  };

  useEffect(() => {
    WeatherData(newCity);
  }, [newCity]);

  // getting times from locally
  const globalTime = new Date();
  let hours = globalTime.getHours();
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = globalTime.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const date = globalTime.getDate();
  const days = globalTime.getDay();
  const month = globalTime.getMonth();
  const years = globalTime.getFullYear();
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const MonthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // here converting kelvin into the celcius

  const celciusval = Math.floor(celciusData - 273);
  const feelsLike = Math.floor(mainTempVal.feels_like - 273);
  const minTemp = Math.floor(mainTempVal.temp_min - 273);
  const maxTemp = Math.floor(mainTempVal.temp_max - 273);
  // fetching the sunset and sunrise value
  let sunrise = new Date(weatherTime.sunrise * 1000);
  const SunriseHrs = sunrise.getHours();
  const SunriseMin = sunrise.getMinutes();
  let sunset = new Date(weatherTime.sunset * 1000);
  const SunsetHrs = sunset.getHours();
  const SunsetMin = sunset.getMinutes();
  return (
    <section>
      <div
        className=" w-4/5 h-[40rem] mx-auto my-8 capitalize rounded-2xl shadow-box flex"
        style={{ backgroundColor: "#ffffff5c" }}
      >
        {/* column-1 */}

        <WeatherSidebar
          celcius={celciusval}
          name={data.name}
          weather={data.weather}
          country={data.country}
          hours={hours}
          minutes={minutes}
          date={date}
          weekday={weekdays[days]}
          month={MonthName[month]}
          years={years}
          handleCity={handleCity}
        />
        {/* column-2 */}
        <WeatherMain
          feelsLike={feelsLike}
          humidity={data.humidity}
          windSpeed={data.windSpeed}
          pressure={data.Pressure}
          minTemp={minTemp}
          maxTemp={maxTemp}
          SunriseHrs={SunriseHrs}
          SunriseMin={SunriseMin}
          SunsetHrs={SunsetHrs}
          SunsetMin={SunsetMin}
        />
      </div>
    </section>
  );
}
