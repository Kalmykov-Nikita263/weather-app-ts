import { IWeather } from "./IWeather";

export interface IWeatherData {
    base: string;
    clouds: {
        all: number;
    }
    cod: number;
    coord: {
        lon: number;
        lat: number;
    }
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_min: number;
        temp_max: number;
    }
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    }
    timezone: number;
    visibility: number;
    weather: IWeather[];
    wind: {
        speed: number;
        deg: number;
    }
}