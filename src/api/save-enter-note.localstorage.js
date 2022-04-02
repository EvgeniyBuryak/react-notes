/**
 * Хранит временные введенные значения в локальной хранилище,
 * но не работает при перезагрузке страницы, то есть не подгружает
 * данные из хранилища в текстовое поле
 * @param {content} содержит веденные значение из тега textInput
 */
const saveEnterNote = ({ content }) => {
    
    localStorage.setItem('ENTER_NOTE', content);
}

export { saveEnterNote };