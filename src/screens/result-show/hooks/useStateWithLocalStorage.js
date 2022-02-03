import React, {useState, useEffect} from "react";

/** 
 * Управляем состоянием вместе с локальным хранилищем
 */ 
const useStateWithLocalStorage = inputNote => {
    const [note, setNote] = useState(inputNote);
        
    useEffect(()=>{
          // Извлекаем наши заметки из хранилища
        const NOTES       = JSON.parse( localStorage.getItem('NOTES') );

        // Находим индекс заметки, с которой оперируем
        const INDEX       = NOTES.findIndex( ({id}) => id == inputNote.id );

        // Находим конкретную заметку и перезаписываем текст
        NOTES[INDEX].text = note.text;

        // Обновленную заметку сохраняем обратно в хранилище
        localStorage.setItem('NOTES', JSON.stringify(NOTES));
    }, [note]);

    return [note, setNote];
};

export { useStateWithLocalStorage };