import React, { useCallback } from 'react';
import { Link } from "react-router-dom";
import "./result-detail.view.scss";

/**
 * Отображение результата одного элемента
 */
const ResultDetail = ( {result} ) => {
    
    const handleFormSubmit = useCallback( () => {
          // Извлекаем наши заметки из хранилища
          const NOTES = JSON.parse(localStorage.getItem('NOTES'));

          // Находим индекс заметки, с которой оперируем
          const INDEX = NOTES.findIndex(({id})=>id == result.id);
  
          // Находим конкретную заметку и перезаписываем текст
          NOTES.splice(INDEX, 1);
  
          // Обновленную заметку сохраняем обратно в хранилище
          localStorage.setItem('NOTES', JSON.stringify(NOTES));
    },[]);

    return (
        <div className="result-detail result-detail__border-line">
            <div className="result-detail__content">
                <p className="result-detail__item">{result.content}</p>
                <form className="result-detail__form" onSubmit={handleFormSubmit}>
                    <Link to='/about'
                        className=""
                        // pass props throught state
                        state={{ from: result }}>
                        <input className="btn" type="submit" value="edit"/>
                    </Link>
                    <input className="btn" type="submit" value="remove"/>
                </form>
            </div>
        </div>
    );
};

export default ResultDetail;