import React from "react";

/**
 * Форма создания новой заметки!
 */
const FormCreateNote = ({ addNote, onInputChange }) => {
    
    return <div className="form-create-note">
        <form>              
            <p><b>Create a new note!</b></p>
            <p><textarea 
                placeholder="Create a new note..."
                type={"text"}
                cols="60" 
                rows="2" 
                onChange={onInputChange}
                ></textarea></p>
            <input className="btn btn--gradient" type="submit" onClick={addNote} value="save"/>
        </form>
    </div>
}

export default FormCreateNote;