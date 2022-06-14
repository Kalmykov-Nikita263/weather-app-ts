import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const IndexPage: FC = () => {

    const [greeting, setGreeting] = useState<string>("Привет пользователь");

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
        <div className="hero is-light has-text-centered">
            <h1 className="title" id="hello" style={{marginTop: '40px'}}>{ greeting }</h1>

            <div style={{display: 'flex', justifyContent: 'center', gap: '280px', marginTop: '25px'}}>
                <NavLink to={"/time"}><button className="button is-primary is-fullwidth" style={{width: 200, maxWidth: 300, margin: '0 auto'}}>Дата и время</button></NavLink>
                <NavLink to={"/weather"}><button className="button is-primary is-fullwidth" style={{width: 200, maxWidth: 300, margin: '0 auto'}}>Погода</button></NavLink>
            </div>
        </div>
    );
}

export default IndexPage;