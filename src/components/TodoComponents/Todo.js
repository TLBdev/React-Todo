import React from 'react';
import './Todo.css'
const ToDo = props => {
    const handleClick = (e) => {
        console.log(e.target.parentElement.id)
        props.changeStatus(e.target.parentElement.id)

    }
    return (
        <div className={props.item.completed ? 'completed' : ''} onClick={handleClick} id={props.item.id}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default ToDo;