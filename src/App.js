import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/home-screen/home-screen.view";
import { ResultShowScreen } from "./screens/result-show/result-show-screen.view";
import Notes from "./screens/notes.jsx"
import "./App.css";

const App = () => {
    return (
        <div className="wrapper">
            <div className="App">
                <h1>Welcome to Notes!</h1>
                <Notes />
                {/* <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="about" element={<ResultShowScreen authed={true}/>} />
                </Routes> */}
            </div>
        </div>
    );
}

export { App };