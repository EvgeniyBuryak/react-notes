const changeNote = (note) => {    
        
    // Извлекаем наши заметки из хранилища
    const NOTES       = JSON.parse( localStorage.getItem('NOTES') );

    // Находим индекс заметки, с которой оперируем
    const INDEX       = NOTES.findIndex( ({id}) => id == note.id );

    // Находим конкретную заметку и перезаписываем текст
    NOTES[INDEX].content = note.content;

    // Обновленную заметку сохраняем обратно в хранилище
    localStorage.setItem('NOTES', JSON.stringify(NOTES));
};

export { changeNote };