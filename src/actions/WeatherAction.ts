import { ThunkAction } from "redux-thunk";
import { RootState } from "../store/RootState";

import { IWeatherData } from "../types/Data/IWeatherData";
import { IWeatherError } from "../types/Errors/IWeatherError";
import { WeatherActionType } from "../types/Actions/Types/WeatherActionType";

import {GET_WEATHER, SET_LOADING, SET_ERROR } from "../consts/ExportConsts";

export const getWeather = (nameofCity: string): ThunkAction<void, RootState, null, WeatherActionType> => {
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

export const setLoading = (): WeatherActionType => {
    return {
        type: SET_LOADING
    };
}

export const setError = (): WeatherActionType => {
    return {
        type: SET_ERROR,
        payload: ''
    };
}