import { ThunkAction } from "redux-thunk";
import { RootState } from "../States/RootState";

import { IWeatherData } from "../Interfaces/Data/IWeatherData";
import { IWeatherError } from "../Interfaces/Errors/IWeatherError";
import { WeatherAction } from "../Interfaces/Actions/Types/WeatherAction";

import {GET_WEATHER, SET_LOADING, SET_ERROR } from "../Constants/ExportConsts";

export const GetWeather = (nameofCity: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameofCity}&appid=${process.env.REACT_APP_API_KEY}`);
            
            if(!res.ok)
            {
                const resData: IWeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: IWeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        }
        catch(error) {
            dispatch({
                type: SET_ERROR,
                payload: error.message
            });
        }
    };
}

export const SetLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    };
}

export const SetError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    };
}