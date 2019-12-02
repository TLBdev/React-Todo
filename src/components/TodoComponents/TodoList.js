import React from 'react'
import ToDo from './Todo'

const ToDoList = props => {
    return (
        <div className='todolist'>
            {props.toDos.map(i => (
                <ToDo changeStatus={props.changeStatus} key={i.id} item={i} />
            ))}
            <button>Remove Completed</button>
        </div>
    )
}

export default ToDoList