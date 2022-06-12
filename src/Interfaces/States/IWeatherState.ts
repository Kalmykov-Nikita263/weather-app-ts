import { IWeatherData } from "../Data/IWeatherData";

export interface IWeatherState {
    type: string;
    data: IWeatherData | null;
    loading: boolean;
    error: string;
}