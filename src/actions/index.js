import { getResults } from "../api/fetch-notes.localstorage";
import { saveEnterNote } from "../api/save-enter-note.localstorage";

export const addNote =           ()     => (dispatch) => {
        dispatch({ type: "ADD_NOTE"})
}

export const handleInputChange = (value) => (dispatch) => {
	dispatch({ type: "HANDLE_INPUT_CHANGE", payload: value })
}

export const requestNotes =      ()     => (dispatch) => {
	dispatch({ type: "REQUEST_NOTES", payload: true})
}

export const receiveNotes =      (data) => (dispatch) => {
        dispatch({ type: "RECEIVE_NOTES", payload: data})
}

export const receiveNotesError = (err)  => (dispatch) => {
	dispatch({ type: "ERROR",         payload: err})
}

export const fetchNotes = () => async (dispatch) => {
        
        dispatch(requestNotes());

        try {
                const result = await getResults();

                dispatch(receiveNotes(result));
        }
        catch (err) {
                dispatch(receiveNotesError(err));
        }
}