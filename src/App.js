import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/home-screen/home-screen.view";
import { ResultShowScreen } from "./screens/result-show/result-show-screen.view";
import "./App.css";

const App = () => {
    return (
        <div className="wrapper">
            <div className="App">
                <h1>Welcome to Notes!</h1>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="about" element={<ResultShowScreen authed={true}/>} />
                </Routes>
            </div>
        </div>
    );
}

export { App };