import React, { useCallback } from "react";
import ResultDetail from "../result-detail/result-detail.view";
import { FormCreateNote } from "../form-create-note/form-create-note.view";
import "./results-list.view.scss";

/**
 * Вывод списка результата
 */
const ResultList = ({ results }) => {
    
    /**
     * Предварительно обрабатывает каждую заметку.
     * Ключ ID в элементе <li> позволяет избежать медленной работы React
     * при повторяющихся элементах <li>
     */
    const renderNote = useCallback( (note) => {
        const ID = note.id;

        return (
            // properties key -  avoiding slow work within browser
            <li key={ID}>
                <ResultDetail result={note}/>
            </li>
    )}, []);

    return (
        <div className="result-list">
            <ul>
                {results.map(renderNote)}
            </ul>
            <FormCreateNote />
        </div>
    );
};

export default ResultList;