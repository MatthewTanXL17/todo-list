import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = event =>{
        event.preventDefault();

        addTodo(value);

        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Add a new task'
        onChange={(event)=>{
            setValue(event.target.value);
        }}/>
        <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm