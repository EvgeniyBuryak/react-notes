import React, { Component, useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addGame } from '../actions';

const Note = ({ noteList }) => {

    const renderItem = useCallback( note => {
        return (<li key={note.id}
                    className="list-group__item">
                note.content

        </li>)
    }, [noteList]);

    return (
        <>
            <p>На суку, дуб зеленый!</p>
            <ul className="list-group" id="contact-list">
                { noteList.map(renderItem) }
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
            addGame
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps) (Note);