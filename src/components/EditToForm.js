import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const EditToForm = ({task, editTodo}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='update task..' value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn' ><FontAwesomeIcon icon={faArrowCircleUp} /></button>
    </form>
  )
}

export default EditToForm