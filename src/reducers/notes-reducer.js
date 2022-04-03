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
            // id с каждой новой заметкой увеличивается на одну        
            let id = 1; // так как первый айди стоит по умолчанию
            
            /** С каждой итерацией считает количество элементов, 
             *  которое по итогу подсчета передадим во временный стейт redux
             * */
            for (let propNote of state.noteList) {            
                id = id + 1;
                console.log(propNote.id);
            }
            
            // NOTES[NOTES.length - 1].id + 1;
            // const ID      = noteList[noteList.lenght - 1] + 1; // NaN
            
            // создаем новую заметку
            // const NEW_NOTE = { id: 1, content: TEXTAREA.value };

            localStorage.setItem('ENTER_NOTE', action.payload); //({id: id, content: action.payload});

            return {
                ...state, newNote: {
                    ...state.newNote, id: id, content: action.payload}
                    // ...state.newNote, ...action.payload}
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