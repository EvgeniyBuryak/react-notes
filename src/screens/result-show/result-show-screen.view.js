import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateWithLocalStorage } from "./hooks/useStateWithLocalStorage";
import "./result-show-screen.view.scss";

const ResultShowScreen = () => {
    
    /** 
     * Получаем данные одной выбранной заметки из домашнего окна
     * с помощью хука useLocation библиотеки react-router-dom
     * */
    const location = useLocation();
    const { from } = location.state;

    /**  
     * Состояние для передачи текста после 
     * изменения в локальное хранилище
     * */
    const [text, setText] = useState( from.text ?? '');
    /** 
     * Используем самостоятельный хук для управления состоянием 
     * с возможностью записи в локальное хранилище
     * */
    const [note, setNote] = useStateWithLocalStorage(from);

    /**
     * Срабатывает при отправке формы
     * hook useCallback - Передает встроенный колбэк. меняется тогда, когда 
     * изменяются значения одной из зависимостей
     * [] - массив зависимостей в квадратных скобках
     */
    const handleFormSubmit = useCallback( event => {
        event.preventDefault();
        setNote({ id: note.id, text: text });        
    },[note, text]);

    /**
     * Во время изменения сохраняем текст в состояние
     * и подстраиваем высоту поля под количество введеных строк текста
     */
    const handleChange = useCallback( event => {        
        setText(event.target.value);
        
        const textarea = document.querySelector('textarea');
        // textarea.style.padding = "5px";
        textarea.addEventListener('keyup', function(){
            if(this.scrollTop > 0){
                this.style.height = 30 + this.scrollHeight + "px";
            }
        })

    }, [note]);

    /**
     * Во время первого рендера правильно отображаем поле ввода текста
     */
    useEffect(()=>{
        const textarea = document.querySelector('textarea');        

        textarea.style.height = 30 + textarea.scrollHeight + "px";             
    },[]);

    return (
        <div className="result-show-screen">
            <nav className="result-show-screen__nav">
                <Link className="result-show-screen__link-back" to="/">Back to Home</Link>
            </nav>
            <div className="result-show-screen__form">
                <form
                    className=""
                    name="form" 
                    method="get" 
                    onSubmit={handleFormSubmit}
                    noValidate
                    >
                    <textarea  
                        className="result-show-detail__textarea"
                        placeholder={"enter new text"}
                        type={"text"}
                        cols="60"
                        rows="2"
                        defaultValue={note.text}
                        onChange={handleChange}
                    />
                    <input className="btn btn--gradient" type="submit" value="Save" />
                </form>            
            </div>
        </div>
    );
}

export { ResultShowScreen };