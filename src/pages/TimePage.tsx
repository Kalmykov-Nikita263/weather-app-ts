import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const TimePage: FC = () => {

    const [dateTime, setDateTime] = useState<string>("");

    setInterval(() => setDateTime(new Date().toLocaleString()), 0);

    return (
        <div className="has-text-centered" style={{position: 'absolute', top: '50%', left: '50%', bottom: '40px', transform: 'translate(-50%, -50%)'}}>
            <h1 className="title">Текущая дата и время - { dateTime }</h1>
            <NavLink to={"/"}><button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Назад</button></NavLink>
        </div>
    );
}

export default TimePage;