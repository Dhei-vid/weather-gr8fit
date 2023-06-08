import { ReactNode } from "react";
import { WeatherInfomation } from "../../types/types";

import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import DescriptionIcon from "@mui/icons-material/Description";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AvTimerIcon from "@mui/icons-material/AvTimer";

type CardWeatherProps = {
  data: WeatherInfomation | null;
};

const WeatherLayout = ({ data }: CardWeatherProps) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full max-w-[48rem] flex-row bg-white bg-clip-border text-gray-700 shadow-md h-full w-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
      <div className="p-6">
        <div className="flex gap-3 text-gray-600 text-2xl justify-center">
          <CloudQueueIcon fontSize="large" />
          <h6 className="mb-4 block font-sans font-semibold uppercase leading-relaxed tracking-normal antialiased text-center">
            WEATHER today
          </h6>
        </div>

        {data ? (
          <div className="font-thin py-6">
            <div className="grid grid-cols-2 items-center px-4 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
              <div className="p-6">
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-x-4">
                    <LocationOnIcon />
                    <span>{data.name}</span>
                  </li>
                  <li className="flex gap-x-4">
                    <MapIcon />
                    <span>
                      {data.coord.lat}, {data.coord.lon}
                    </span>
                  </li>
                  <li className="flex gap-x-4">
                    <DescriptionIcon />
                    <span>{data.weather[0].description}</span>
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <h1 className="font-bold text-5xl">{data.main.temp} °F</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="flex gap-x-4 p-8 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                <span className="flex gap-2 ">
                  <AirIcon />
                  <p>{data.wind.speed}</p>
                  <span>Wind Speed</span>
                </span>
              </div>

              <div className="flex gap-x-4 p-8 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                <span className="flex gap-2 ">
                  <WaterDropIcon />
                  <p>{data.main.humidity} °F</p>
                </span>
                <span>Humidity</span>
              </div>

              <div className="flex gap-x-4 col-span-2 justify-center p-8 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                <span className="flex gap-2 ">
                  <AvTimerIcon />
                  <p>{data.main.pressure}</p>
                </span>
                <span>Pressure</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WeatherLayout;
