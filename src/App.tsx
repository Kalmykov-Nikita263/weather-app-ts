import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./Repository/States/RootState";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import Weather from "./Components/Weather";

import { SetAlert } from "./Repository/Actions/AlertAction";
import { SetError } from "./Repository/Actions/WeatherAction";

import './App.css';

const App: FC = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMessage = useSelector((state: RootState) => state.alert.message);

    return (
        <div className="has-text-centered">
            <Search title="Введите название города и нажмите кнопку &quot;Поиск&quot;" />
            {loading ? <h2 className="is-size-3 py-2">Загрузка...</h2> : weatherData && <Weather data={weatherData} /> }

            {alertMessage && <Alert message={alertMessage} onClose={() => dispatch(SetAlert(''))} /> }
            {error && <Alert message={error} onClose={() => dispatch(SetError())} />}
        </div>
    );
}

export default App;