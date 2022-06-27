import { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { setAlert } from "../actions/AlertAction";
import { getWeather, setLoading } from "../actions/WeatherAction";

interface ISearchProps {
    title: string;
}

const Search: FC<ISearchProps> = ({ title }) => {

    const dispatch = useDispatch();

    const [city, setCity] = useState('');

    const handleCityChanged = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const handleSearchCityWeather = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(city.trim() === '')
        {
            return dispatch(setAlert('Введите название города!'));
        }

        dispatch(setLoading());
        //@ts-ignore
        dispatch(getWeather(city));
        setCity('');
    }

    return (
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">

                    <h1 className="title">{title}</h1>

                    <form className="py-5">
                        <input type="text" className="input has-text-centered mb-2" placeholder="Введите название города" style={{maxWidth: 300}} value={city} onChange={handleCityChanged} />
                        <button className="button is-primary is-fullwidth" onClick={handleSearchCityWeather} style={{maxWidth: 300, margin: '0 auto'}}>Поиск</button>
                    </form>

                    <NavLink to={"/weather-app-ts"}><button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Назад</button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Search;