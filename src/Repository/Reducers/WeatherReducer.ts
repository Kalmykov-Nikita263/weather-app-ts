import { IWeatherState } from "../Interfaces/States/IWeatherState";
import { WeatherActionType } from "../Interfaces/Actions/Types/WeatherActionType";
import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../Constants/ExportConsts";

const initialState: IWeatherState = {
    type: '',
    data: null,
    loading: false,
    error: ''
};

export default(state = initialState, action: WeatherActionType): IWeatherState => {
    switch(action.type) {
        
        case GET_WEATHER:
            return {
                type: '',
                data: action.payload,
                loading: false,
                error: ''
            };
        
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        
        default:
            return state;
    }
}