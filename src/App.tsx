import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";;

import IndexPage from "./pages/IndexPage";
import WeatherPage from "./pages/WeatherPage";
import TimePage from "./pages/TimePage";

import './App.css';

const App: FC = () => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/time" element={<TimePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;