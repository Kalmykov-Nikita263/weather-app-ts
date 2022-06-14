import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../actions/AlertAction";
import { setError } from "../actions/WeatherAction";

import { RootState } from "../store/RootState";

import Alert from "../ccomponents/Alert";
import Search from "../containers/Search";
import Weather from "../ccomponents/Weather";

const WeatherPage: FC = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMessage = useSelector((state: RootState) => state.alert.message);

    return (
        <div className="has-text-centered">
            <Search title="Введите название города и нажмите кнопку &quot;Поиск&quot;" />
            {loading ? <h2 className="is-size-3 py-2">Загрузка...</h2> : weatherData && <Weather data={weatherData} /> }

            {alertMessage && <Alert message={alertMessage} onClose={() => dispatch(setAlert(''))} /> }
            {error && <Alert message={error} onClose={() => dispatch(setError())} />}
        </div>
    );
}

export default WeatherPage;