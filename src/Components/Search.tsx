import { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { SetAlert } from "../Repository/Actions/AlertAction";
import { GetWeather, SetLoading } from "../Repository/Actions/WeatherAction";

interface ISearchProps {
    title: string;
}

const Search: FC<ISearchProps> = ({ title }) => {

    const dispatch = useDispatch();

    const [city, setCity] = useState('');

    const changeInputData = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitFormData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '')
        {
            return dispatch(SetAlert('Введите название города!'));
        }

        dispatch(SetLoading());
        //@ts-ignore
        dispatch(GetWeather(city));
        setCity('');
    }

    return (
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">

                    <h1 className="title">{title}</h1>

                    <form className="py-5" onSubmit={submitFormData}>
                        <input type="text" className="input has-text-centered mb-2" placeholder="Введите название города" style={{maxWidth: 300}} value={city} onChange={changeInputData} />
                        <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Поиск</button>
                    </form>

                    <NavLink to={"/"}><button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Назад</button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Search;