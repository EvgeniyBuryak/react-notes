/**
 * Получаем новую заметку, которую нужно внести в локальное хранилище, далее просто "хранилище".
 * Сначала извлекаем из хранилища текущие данные, парсим их.
 * Вносим новую заметку в массив заметок. Снова весь массив переводим в JSON.
 * И сохраняем в хранилище.
 */
const addNote = (new_notes) => {

    if (localStorage.getItem('NOTES') != null) {

        const ARRAY_NOTES = JSON.parse(localStorage.getItem('NOTES'));
        
        ARRAY_NOTES.push(new_notes);

        const NOTES_JSON = JSON.stringify(ARRAY_NOTES);

        localStorage.setItem('NOTES', NOTES_JSON);
    }
}

export { addNote };