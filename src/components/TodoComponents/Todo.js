import React from 'react';

const ToDo = props => {
    const handleClick = (item, e) => {
        console.log(e.target.parentElement.id)
        props.changeStatus(e.target.parentElement.id)
        console.log(item)
    }
    return (
        <div onClick={handleClick} id={props.item.id}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default ToDo;