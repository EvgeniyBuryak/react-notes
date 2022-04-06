import initialState from "./initial-state";
import { addNote } from "../actions";
import { changeNote } from "../api/change-note.localstorage";

const notesReducer = (state = initialState.notes, action) => {
    switch(action.type) {

        case 'ADD_NOTE': {
            /** Сохраняем новую заметку в хранилище */
            addNote(state.newNote);

            return {
                ...state,
                noteList: [...state.noteList, state.newNote]                
            }
        }

        case 'REMOVE_NOTE': {
            return {
                ...state,
                noteList: state.noteList.filter( note => note.id !== action.payload )
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

        case "EDIT_NOTE":
            const { note_id, id, content } = action.payload;

            // Создаем копию массива
            const arr = [...state.noteList];

            // Создаем новую заметку взамен старой
            const NEW_NOTE = {id: id, content: content}

            console.log(`reducer - arr_id: ${note_id} id: ${id} content: ${content}`);
            // Удаляем старую и записываем новую заметку
            arr.splice(note_id, 1, NEW_NOTE);

            // Вносим изменения в локальное хранилище
            changeNote(NEW_NOTE);

            return {
                ...state,
                noteList: arr
            }

        // next note ...

        default: return state;
    }

}

export default notesReducer;