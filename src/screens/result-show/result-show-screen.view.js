import React, { useEffect, useState, useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";
import { editNote } from "../../actions";

const ResultShowScreen = ( props ) => {
    
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
    const [text, setText] = useState( from.content ?? '');

    /**
     * Срабатывает при отправке формы
     * hook useCallback - Передает встроенный колбэк. меняется тогда, когда 
     * изменяются значения одной из зависимостей
     * [] - массив зависимостей в квадратных скобках
     */
    const handleFormSubmit = useCallback( () => {
        const { noteList } = props;
        const { editNote } = props.actions;

        // Находим нужный индекс из массива заметок, чтобы перезаписать правильную заметку
        const NOTE_ID = noteList.findIndex( note => note.id === from.id );
        
        console.log(`view - arr_id: ${NOTE_ID} id: ${from.id} content: ${text}`);
        editNote({ note_id: NOTE_ID, id: from.id, content: text });    
    }, [text]);

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

    }, [text]);

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
                    // name="form" 
                    // method="get" 
                    // onSubmit={handleFormSubmit}
                    noValidate
                    >
                    <textarea  
                        className="result-show-detail__textarea"
                        placeholder={"enter new text"}
                        type={"text"}
                        cols="60"
                        rows="2"
                        defaultValue={text}
                        onChange={handleChange}
                    />
                    <Link to="/">
                        <input
                            className="btn btn--gradient" 
                            type="submit" 
                            onClick={handleFormSubmit}
                            value="Save" />                            
                    </Link>
                </form>            
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        noteList: state.notes.noteList,
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators (
        {
            editNote,
        },
        dispatch
    )

});

export default connect(mapStateToProps, mapDispatchToProps) (ResultShowScreen);