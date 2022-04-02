import initialState from "./initial-state";
import { setResults } from "../api/set-notes.localstorage";

const notesReducer = (state = initialState.notes, action) => {
    switch(action.type) {

        case 'ADD_NOTE': {
            /** Сохраняем новую заметку в хранилище */
            setResults(state.newNote);

            return {
                ...state,
                noteList: [...state.noteList, state.newNote]                
            }
        }

        case 'HANDLE_INPUT_CHANGE': {
            return {
                ...state, newNote: {
                    ...state.newNote, ...action.payload}
            }
        }

        case "REQUEST_NOTES":
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