import { GET_WEATHER } from "../../Constants/ExportConsts";
import { IWeatherData } from "../Data/IWeatherData";

export interface IGetWeatherAction {
    type: typeof GET_WEATHER;
    payload: IWeatherData;
}