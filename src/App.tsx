import './App.css';
import IndexPage from "./pages/IndexPage";
import WeatherPage from "./pages/WeatherPage";
import TimePage from "./pages/TimePage";
import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";;

const App: FC = () => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/weather-app-ts" element={<IndexPage />} />
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/time" element={<TimePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;