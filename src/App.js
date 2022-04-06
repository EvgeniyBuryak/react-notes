import React from "react";
import {
         BrowserRouter as Router,
         Routes, 
         Route,
         useRoutes } from "react-router-dom";

import ResultShowScreen from "./screens/result-show/result-show-screen.view";
import Notes from "./screens/home-screen/notes-screen.view.jsx";
import "./App.css";

const App = () => {
    let routes = useRoutes([
        { path: "/",     element: <Notes /> },
        { path: "about", element: <ResultShowScreen authed={true} /> },
    ]);

    return routes;
};

const AppWrapper = () => {
    return (
        <div className="wrapper">
            <div className="App">
                <h1>Welcome to Notes!</h1>                
                <Router>
                    <App />
                    {/* <Route path="/" element={<HomeScreen />} />*/}                    
                    {/* <Route path="about" element={<ResultShowScreen authed={true}/>} /> */}
                </Router>
            </div>
        </div>
    );
};

export { AppWrapper };