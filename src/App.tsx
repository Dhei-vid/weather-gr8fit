import { useState, ChangeEvent, KeyboardEvent } from "react";
import { WeatherInfomation } from "./types/types";

import Banner from "./component/utility/banner.component";
import WeatherLayout from "./component/layout/weather.layout.component";
import SearchBar from "./component/utility/searchbar.component";
import ErrorMessage from "./component/error/error.component";

import { getData } from "./component/api/api.component";

const App = (): JSX.Element => {
  const [location, setLocation] = useState<string>("");
  const [locationWeatherData, setlocationWeatherData] =
    useState<WeatherInfomation | null>(null);
  const [error, setError] = useState<string | null>(null);

  // : Promise<WeatherInfomation>
  const fetchWeatherData = async (location: string) => {
    try {
      // const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      // );

      const response: any = await getData<WeatherInfomation>(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      );

      if (!response.ok) {
        throw Error("Failed to fetch weather data");
      }

      // return data;
      return response;
    } catch (error) {
      const errorMessage = (error as Error).message;
      setError(errorMessage);

      throw setError(errorMessage);
    } finally {
    }
  };

  // using the enter keypad as a trigger point
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      fetchWeatherData(location).then((weatherData: WeatherInfomation) => {
        {
          weatherData && setlocationWeatherData(weatherData);
        }
      });

      // clear the input element
      setLocation("");
    }
  };

  // GETTING DATA FROM INPUT BAR
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldValue = event.target.value;
    setLocation(searchFieldValue);
  };

  return (
    <>
      {error ? (
        <ErrorMessage errorMessage={error} />
      ) : (
        <div className="">
          {/* BANNER */}
          <Banner />
          {/* SEARCH BOX */}
          <div className="grid justify-items-center w-full gap-12">
            <div className="">
              <SearchBar
                location={location}
                placeholder={"What city are you located?"}
                onChangeHandler={onSearchChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            {/* WEATHER LAYOUT */}
            <div>
              <WeatherLayout data={locationWeatherData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
