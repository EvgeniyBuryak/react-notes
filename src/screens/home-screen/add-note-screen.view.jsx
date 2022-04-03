import React, { useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FormCreateNote from "./views/form-create-note/form-create-note.view";
import { addNote,
         handleInputChange,
         fetchNotes } from '../../actions';

const AddNote = ( props ) => {

    useEffect(()=>{
        const enter_note = localStorage.getItem('ENTER_NOTE');
        const textarea = document.querySelector('textarea');

        if (enter_note != '') {
            textarea.value = enter_note;
        }
    }, []);

    const handleInputChange = useCallback( event => {
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
        
        // // id с каждой новой заметкой увеличивается на одну        
        // let lenght = 1; // так как первый айди стоит по умолчанию
        
        // /** С каждой итерацией считает количество элементов, 
        //  *  которое по итогу подсчета передадим во временный стейт redux
        //  * */
        // for (let propNote of noteList) {            
        //     lenght = lenght + 1;
        //     console.log(propNote.id);
        // }
        
        // // NOTES[NOTES.length - 1].id + 1;
        // // const ID      = noteList[noteList.lenght - 1] + 1; // NaN
        
        // // создаем новую заметку
        // // const NEW_NOTE = { id: 1, content: TEXTAREA.value };
        handleInputChange(1, content);        
    });

    const handleSubmit = useCallback( event => {
        const { addNote } = props.actions;
        event.preventDefault();
		
		if (props.newNote.content != '') {
            // после отправки значения обнуляем текстовое значение в поле ввода
            const textarea = document.querySelector('textarea');
            textarea.value = '';
            // также обнуляем значение в хранилище
            localStorage.setItem('ENTER_NOTE', '');

            addNote();
		}
	});

    return (
        <>    
          <FormCreateNote addNote={handleSubmit} onInputChange={handleInputChange}/>                            
        </>
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

export default connect(mapStateToProps, mapDispatchToProps) (AddNote);