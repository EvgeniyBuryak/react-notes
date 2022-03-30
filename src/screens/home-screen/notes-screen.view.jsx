import React, { Component, useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ResultList from "./views/result-list/results-list.view";
import AddNote from "./views/form-create-note/form-create-note.view";
import { addNote,
         handleInputChange,
         fetchNotes } from '../../actions';

const Note = ( props ) => {

    useEffect(()=>{
        const { fetchNotes } = props.actions;

        fetchNotes();
    }, []);

    const onInputChange = useCallback( event => {
        const { handleInputChange } = props.actions;  
        const { noteList }          = props;

        /**
         * По мере как пользователь будет вводить текст, свободное пространство
         * в поле ввода заканчивается и в этом случае увеличиваем зону видимости
         * поле ввода (добавляется дополнительная строка)
         * 
         * пока без ограничения
         */
        event.target.addEventListener('keyup', function(){
            if(this.scrollTop > 0){
                this.style.height = this.scrollHeight + "px";
            }
        })

        const content = event.target.value;

        // Если входных данных нет, останавливаем отправку формы и прерываем выполнение функции
        // if (TEXTAREA.value == "") {
        //     event.preventDefault();
        //     return;
        // }
        
        // id с каждой новой заметкой увеличивается на одну        
        let lenght = 1; // так как первый айди стоит по умолчанию
        
        for (let propNote of noteList) {            
            lenght = lenght + 1;
            console.log(propNote.id);
        }
        
        // NOTES[NOTES.length - 1].id + 1;
        // const ID      = noteList[noteList.lenght - 1] + 1; // NaN
        
        // создаем новую заметку
        // const NEW_NOTE = { id: 1, content: TEXTAREA.value };
        handleInputChange(lenght, content);
    });

    const handleSubmit = useCallback( event => {
        const { addNote } = props.actions;
        event.preventDefault();
		
		if (props.newNote.content != '') {
            
            addNote();
		}
	});

    return (
        <div className="container">
            <p>На суку, дуб зеленый123!</p>
            <ul className="list-group" id="contact-list">
                <ResultList results={props.noteList} />
                <AddNote addNote={handleSubmit} handleInputChange={onInputChange}/>
                {/* { props.noteList.map(renderItem) } */}
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        noteList : state.notes.noteList,
        newNote  : state.notes.newNote,        
    }
}

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators(
        {
            addNote,
            handleInputChange,
            fetchNotes
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps) (Note);