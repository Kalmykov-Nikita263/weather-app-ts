import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { SetAlert } from "./Repository/Actions/AlertAction";
import { SetError } from "./Repository/Actions/WeatherAction";
import { RootState } from "./Repository/States/RootState";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import Weather from "./Components/Weather";

import './App.css';

const App: FC = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMessage = useSelector((state: RootState) => state.alert.message);

    const [greeting, setGreeting] = useState<string>("Привет пользователь");
    const [dateTime, setDateTime] = useState<string>("");

    setInterval(() => setDateTime(new Date().toLocaleString()), 1000);

    setTimeout(() => {
        const hours = new Date().getHours();

        if(hours >= 6 && hours <= 11) {
            setGreeting('Доброе утро, пожалуйста выберите опцию')  
        }

        else if(hours > 11 && hours <= 18) {
            setGreeting('Добрый день, пожалуйста выберите опцию')  
        }

        else {
            setGreeting('Добрый вечер, пожалуйста выберите опцию')    
        }
    });

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element=
                    {
                        <div className="hero is-light has-text-centered">
                            <h1 className="title" id="hello" style={{marginTop: '40px'}}>{ greeting }</h1>

                            <div style={{display: 'flex', justifyContent: 'center', gap: '280px', marginTop: '25px'}}>
                                <NavLink to={"/time"}><button className="button is-primary is-fullwidth" style={{width: 200, maxWidth: 300, margin: '0 auto'}}>Дата и время</button></NavLink>
                                <NavLink to={"/weather"}><button className="button is-primary is-fullwidth" style={{width: 200, maxWidth: 300, margin: '0 auto'}}>Погода</button></NavLink>
                            </div>
                        </div>
                    } />

                    <Route path="/weather" element=
                    {
                        <div className="has-text-centered">
                            <Search title="Введите название города и нажмите кнопку &quot;Поиск&quot;" />
                            {loading ? <h2 className="is-size-3 py-2">Загрузка...</h2> : weatherData && <Weather data={weatherData} /> }

                            {alertMessage && <Alert message={alertMessage} onClose={() => dispatch(SetAlert(''))} /> }
                            {error && <Alert message={error} onClose={() => dispatch(SetError())} />}
                        </div>
                    } />

                    <Route path="/time" element=
                    {
                        <div className="has-text-centered" style={{position: 'absolute', top: '50%', left: '50%', bottom: '40px', transform: 'translate(-50%, -50%)'}}>
                            <h1 className="title">Текущая дата и время - { dateTime }</h1>
                            <NavLink to={"/"}><button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Назад</button></NavLink>
                        </div>
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;