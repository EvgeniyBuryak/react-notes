import React, { Component, useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addGame,
         fetchNotes } from '../actions';

const Note = ( props ) => {

    const renderItem = useCallback( note => {
        return (<li key={note.id}
                    className="list-group__item">
                        
                    ${note.content}
                </li>
        )
    }, [props.noteList]);

    useEffect(()=>{
        const { fetchNotes } = props.actions;

        fetchNotes();

        console.log(props);
    }, []);

    return (
        <>
            <p>На суку, дуб зеленый123!</p>
            <ul className="list-group" id="contact-list">
                { props.noteList.map(renderItem) }
            </ul>
        </>
    );
}

// class Note extends Component {
    
//     constructor(props) {
//         super(props);
//     }

//     render () {
//         return (
//           <div>
//             <p>На суку, дуб зеленый!</p>
//           </div>
//         );
//     }
// }

function mapStateToProps(state) {
    return {
        noteList : state.notes.noteList,        
    }
}

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators(
        {
            addGame,
            fetchNotes
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps) (Note);