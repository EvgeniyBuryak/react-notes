import initialState from "./initial-state";

const notesReducer = (state = initialState.notes, action) => {
    switch(action.type) {

        case 'ADD_NOTE': {
            return {
                ...state,
                noteList: [...state.noteList, state.newNote]
            }
        }

        // next note ...
    }

}

export default notesReducer;