import React, { useCallback } from "react";

/**
 * Форма создания новой заметки!
 */
const FormCreateNote = () => {

    const handleFormSubmit = useCallback( event => {
        
        // Находим textarea откуда извлечем значение
        const TEXTAREA = document.querySelector('textarea');
        
        // Если входных данных нет, останавливаем отправку формы и прерываем выполнение функции
        if (TEXTAREA.value == "") {
            event.preventDefault();
            return;
        }

        // Подгружаем текущие данные заметок из локального хранилища
        const NOTES    = JSON.parse(localStorage.getItem('NOTES'));
        
        // id с каждой новой заметкой увеличивается на одну
        const ID       = NOTES[NOTES.length - 1].id + 1;
        
        // создаем новую заметку
        const NEW_NOTE = { id: ID, text: TEXTAREA.value };
        
        // Добавляем новую заметку к массиву заметок
        NOTES.push(NEW_NOTE);
        
        // Записываем обновленный массив заметок в локальное хранилище
        localStorage.setItem('NOTES', JSON.stringify(NOTES));
    }, []);

    /**
     * По мере как пользователь будет вводить текст, свободное пространство
     * в поле ввода заканчивается и в этом случае увеличиваем зону видимости
     * поле ввода (добавляется дополнительная строка)
     * 
     * пока без ограничения
     */
    const handleTextareaChange = useCallback( () => {
        const TEXTAREA = document.querySelector('textarea');

        TEXTAREA.addEventListener('keyup', function(){
            if(this.scrollTop > 0){
                this.style.height = this.scrollHeight + "px";
            }
        })
    }, []);

    return <div className="form-create-note">
        <form onSubmit={handleFormSubmit}>
            <p><b>Create a new note!</b></p>
            <p><textarea 
                placeholder="Create a new note..." 
                type={"text"}
                cols="60" 
                rows="2" 
                onChange={handleTextareaChange}
                ></textarea></p>
            <p><input className="btn btn--gradient" type="submit" value="save"/></p>
        </form>
    </div>
}

export { FormCreateNote };