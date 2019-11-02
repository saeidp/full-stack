import { IWeatherDto } from "./weather-dto";

export interface IWeather {
  date: Date;
  tempC: number;
  tempF: number;
  summary: string;
}

export class Weather implements IWeather {
  date: Date;
  tempC: number;
  tempF: number;
  summary: string;

  constructor(source: IWeatherDto) {
    this.date = new Date(source.date);
    this.tempC = source.tempC;
    this.tempF = source.tempF;
    this.summary = source.summary;
  }
}
