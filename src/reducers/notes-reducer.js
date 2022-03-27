import initialState from "./initial-state";

const notesReducer = (state = initialState.notes, action) => {
    switch(action.type) {

        case 'ADD_NOTE': {
            return {
                ...state,
                noteList: [...state.noteList, state.newNote]
            }
        }

        case "REQUEST_GAMES":
			return {
				...state, isFetching: true
			}

        case "RECEIVE_NOTES": 
			return {
				...state, 
                noteList: action.payload
                // isFetching: false, 
			}  

        // next note ...

        default: return state;
    }

}

export default notesReducer;