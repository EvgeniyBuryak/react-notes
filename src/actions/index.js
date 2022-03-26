import { getResults } from "../api/fetch-notes.localstorage";

export const addGame = () => (dispatch) => {
        dispatch({ type: "ADD_NOTE"})
}

export const requestNotes = () => (dispatch) => {
	dispatch({ type: "REQUEST_NOTES", payload: true})
}

export const receiveNotesError = (err) => (dispatch) => {
	dispatch({type: "ERROR", payload: err})
}

export const receiveNotes = (data) => (dispatch) => {
	dispatch({ type: "RECEIVE_NOTES", payload: data})
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