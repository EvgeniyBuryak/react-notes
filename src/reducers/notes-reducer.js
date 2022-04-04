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
            /** 
             * id с каждой новой заметкой увеличивается на одну        
             * так как первый айди стоит по умолчанию
             */ 
            let id = 1; 
            
            /** 
             * С каждой итерацией считает количество элементов, 
             * которое по итогу подсчета передадим во временный state redux
             * */
            for (let propNote of state.noteList) {   
                if (id <= propNote.id) {  
                    id = propNote.id + 1;
                }
            }

            localStorage.setItem('ENTER_NOTE', action.payload);

            return {
                ...state, newNote: {
                    ...state.newNote, id: id, content: action.payload}                    
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