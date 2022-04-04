import React, { useCallback } from "react";
import ResultDetail from "../result-detail/result-detail.view";
import "./results-list.view.scss";

/**
 * Вывод списка результата
 */
const ResultList = ({ results, onRemoveNote }) => {
    
    /**
     * Предварительно обрабатывает каждую заметку.
     * Ключ ID в элементе <li> позволяет избежать медленной работы React
     * при повторяющихся элементах <li>
     */
    const renderNote = useCallback( (note) => {
        const ID = note.id;

        return (
            // properties key -  avoiding slow work within browser
            // list-group__item - скопировал из другого проекта описание в css нету
            <li key={ID}
                className="list-group__item">
                <ResultDetail note={note} onRemoveNote={onRemoveNote}/>
            </li>
    )}, []);

    return (
        <div className="result-list">
            <ul>
                {results.map(renderNote)}
            </ul>            
        </div>
    );
};

export default ResultList;