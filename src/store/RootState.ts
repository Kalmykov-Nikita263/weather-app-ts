import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import AlertReducer from "../reducers/AlertReducer";
import WeatherReducer from "../reducers/WeatherReducer";

const rootReducer = combineReducers({
    weather: WeatherReducer,
    alert: AlertReducer
});

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;