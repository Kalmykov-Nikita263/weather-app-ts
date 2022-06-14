import { IGetWeatherAction } from "../IGetWeatherAction";
import { ISetLoadingAction } from "../ISetLoadingAction";
import { ISetErrorAction } from "../ISetErrorAction";

export type WeatherActionType = IGetWeatherAction | ISetLoadingAction | ISetErrorAction;