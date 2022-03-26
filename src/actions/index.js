
export const addGame = () => (dispatch) => {
        dispatch({ type: "ADD_NOTE"})
}

export const requestNotes = () => (dispatch) => {
	dispatch({ type: "REQUEST_NOTES", payload: true})
}

export const receiveNotesError = (err) => (dispatch) => {
	dispatch({type: "ERROR", payload: err})
}

export const fetchNotes = () => async (dispatch) => {
        dispatch(requestNotes());
        try {
                const result = await getNotelist(); // запрашивать данные из local storage

                dispatch(receiveNotes(result.data));
        }
        catch (err) {
                dispatch(receiveNotesError(err));
        }
}