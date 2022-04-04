import React, { useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ResultList from "./views/result-list/results-list.view";
import AddNote from "./add-note-screen.view.jsx";
import { fetchNotes,
         removeNote } from '../../actions';

const Note = ( props ) => {

    useEffect(()=>{
        const { fetchNotes } = props.actions;

        fetchNotes();
    }, []);

    // const handleRemoveNote2 = useCallback( note_id => {
    //     const { removeNote } = props.actions;

    //     removeNote(note_id);
    // });

    const handleRemoveNote = note_id => {
        
        const { removeNote } = props.actions;
        // const { noteList } = props;

        // event.preventDefault();
        // console.log(event.target.note_id);

        const NOTES = JSON.parse(localStorage.getItem('NOTES'));

        // Находим индекс заметки, с которой оперируем
        const INDEX = NOTES.findIndex( ({id})=> id == note_id );

        // Находим конкретную заметку и перезаписываем текст
        NOTES.splice(INDEX, 1);

        // Обновленную заметку сохраняем обратно в хранилище
        localStorage.setItem('NOTES', JSON.stringify(NOTES));

        removeNote(note_id)
    };

    return (
        <div className="container">
            <p>На суку, дуб зеленый123!</p>
            <ul className="list-group" id="contact-list">
                <ResultList results={props.noteList} onRemoveNote={handleRemoveNote}/>
                <AddNote />
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        noteList : state.notes.noteList,
    }
}

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators(
        {
            fetchNotes,
            removeNote,
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps) (Note);