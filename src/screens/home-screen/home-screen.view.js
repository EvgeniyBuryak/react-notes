import React, { useState, useEffect } from "react";
import ResultsList from "./views/result-list/results-list.view";

const HomeScreen = () => {
    const [results, setResults] = useState([]);

    /** 
     * Если локальное хранилище пусто по нашему ключу 'NOTES',
     * то записываем предварительно одну заметку,
     * потом переводим данные в JSON и записываем в локальное хранилище
     * 
     * иначе если хранилище по ключу 'NOTES' не пустое
     * 
     * Подгружаем данные из него
     */ 
    const getResults = () => {
        let result;

        const FIRST_NOTE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        
        if (localStorage.getItem('NOTES') == null) {

            result = [{ id: 1, text: FIRST_NOTE }];

            const NOTES_JSON = JSON.stringify(result);
                            
            localStorage.setItem('NOTES', NOTES_JSON);
        }
        else {
            result = JSON.parse(localStorage.getItem('NOTES'));
        }

        setResults(result);
    };

    useEffect(() => {
        getResults();
    }, []);

    return (
        <>
        <div className="container">         
            <ResultsList results={results} />            
        </div>
        </>
    )
}

export { HomeScreen };