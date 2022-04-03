import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ResultList from "./views/result-list/results-list.view";
import AddNote from "./add-note-screen.view.jsx";
import { addNote,
         handleInputChange,
         fetchNotes } from '../../actions';

const Note = ( props ) => {

    useEffect(()=>{
        const { fetchNotes } = props.actions;

        fetchNotes();
    }, []);

    return (
        <div className="container">
            <p>На суку, дуб зеленый123!</p>
            <ul className="list-group" id="contact-list">
                <ResultList results={props.noteList} />
                <AddNote />
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