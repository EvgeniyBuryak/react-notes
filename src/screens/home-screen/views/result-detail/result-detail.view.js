import React from 'react';
import { Link } from "react-router-dom";
import "./result-detail.view.scss";

/**
 * Отображение результата одного элемента
 */
const ResultDetail = ( { note, onRemoveNote } ) => {

    return (
        <div className="result-detail result-detail__border-line">
            <div className="result-detail__content">
                <p className="result-detail__item">{note.content}</p>
                <form className="result-detail__form">
                    <Link to='/about'
                        className=""
                        // pass props throught state
                        state={{ from: note }}>
                        <input className="btn" type="submit" value="edit"/>
                    </Link>
                    <input className="btn" type="submit" onClick={() => onRemoveNote(note.id)} value="remove"/>
                </form>
            </div>
        </div>
    );
};

export default ResultDetail;