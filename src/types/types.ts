import { ChangeEventHandler, KeyboardEventHandler } from "react";

export type WeatherInfomation = {
  name: string;
  weather: [{ description: string }];
  coord: {
    lon: number;
    lat: number;
  };
  main: { temp: number; pressure: number; humidity: number };
  wind: { speed: number };
};

export type SearchBoxProps = {
  location: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

export type ErrorProps = {
  errorMessage: string;
};
