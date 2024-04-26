/* eslint-disable react/prop-types */
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { PiDrop } from "react-icons/pi";
import { SiSpeedtest } from "react-icons/si";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
export default function WeatherMain({
  feelsLike,
  humidity,
  windSpeed,
  pressure,
  minTemp,
  maxTemp,
  SunriseHrs,
  SunriseMin,
  SunsetHrs,
  SunsetMin,
}) {
  //   console.log(feelLike);
  return (
    <div>
      {/* weather-description   */}
      <div className="px-8 py-8">
        <div>
          <div>
            <h1 className="text-xl font-semibold underline underline-offset-8 ">
              today
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-6 py-4">
            <div
              className="w-52 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl"
              style={{ backgroundColor: "#ffffff5c" }}
            >
              <p className="py-1 text-black">sunset & sunrise</p>
              <div className="flex items-center">
                <p className="text-2xl  text-yellow-300  p-2 rounded-full ">
                  <FiSunrise />
                </p>
                <h1 className="text-lg font-medium px-3">
                  {SunriseHrs}:{SunriseMin} AM
                </h1>
              </div>
              <div className="flex items-center py-2">
                <p className="text-2xl  text-yellow-300  p-2 rounded-full ">
                  <FiSunset />
                </p>
                <h1 className="text-lg font-medium px-3">
                  {SunsetHrs}:{SunsetMin} PM
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold underline underline-offset-4 ">{`weather's highlights`}</h1>
        </div>
        <div className="grid grid-cols-3 gap-6 py-8">
          <div
            className="w-48 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl "
            style={{ backgroundColor: "#ffffff5c" }}
          >
            <span className="text-4xl text-sky-400 ">
              <CiTempHigh />
            </span>
            <p className="py-1 text-black">feels like</p>
            <h1 className="text-4xl font-light">{feelsLike}°c</h1>
          </div>
          <div
            className="w-48 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl"
            style={{ backgroundColor: "#ffffff5c" }}
          >
            <span className="text-4xl text-sky-400">
              <PiDrop />
            </span>
            <p className="py-1 text-black">humidity</p>
            <h1 className="text-4xl font-light">{humidity}%</h1>
          </div>
          <div
            className="w-48 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl"
            style={{ backgroundColor: "#ffffff5c" }}
          >
            <span className="text-4xl text-sky-400">
              <LuWind />
            </span>
            <p className="py-1 text-black">wind speed</p>
            <h1 className="text-4xl font-light">
              {windSpeed}
              <span className="text-lg font-medium normal-case">km/h</span>
            </h1>
          </div>
          <div
            className="w-48 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl"
            style={{ backgroundColor: "#ffffff5c" }}
          >
            <span className="text-4xl text-sky-400">
              <SiSpeedtest />
            </span>
            <p className="py-1 text-black">air pressure</p>
            <h1 className="text-4xl font-light">
              {pressure}
              <span className="text-lg font-medium normal-case px-2">hPa</span>
            </h1>
          </div>
          <div
            className="w-48 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl"
            style={{ backgroundColor: "#ffffff5c" }}
          >
            <span className="text-4xl text-sky-400 ">
              <FaTemperatureArrowDown />
            </span>
            <p className="py-1 text-black">min temp.</p>
            <h1 className="text-4xl font-light">{minTemp}°c</h1>
          </div>
          <div
            className="w-48 h-[9rem] shadow-box-2 py-4 px-6 rounded-2xl"
            style={{ backgroundColor: "#ffffff5c" }}
          >
            <span className="text-4xl font-thin text-sky-400 ">
              <FaTemperatureArrowUp />
            </span>
            <p className="py-1 text-black">max temp.</p>
            <h1 className="text-4xl font-light">{maxTemp}°c</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
