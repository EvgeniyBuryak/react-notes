import React, { useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FormCreateNote from "./views/form-create-note/form-create-note.view";
import { addNote,
         handleInputChange } from '../../actions';

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
        
        handleInputChange(content);        
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
        newNote  : state.notes.newNote,        
    }
}

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators(
        {
            addNote,
            handleInputChange,
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps) (AddNote);