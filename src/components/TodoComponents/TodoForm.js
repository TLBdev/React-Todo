import React from 'react'

class ToDoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ''
        }
    }
    handleChanges = e => {
        this.setState({
            task: e.target.value
        })

    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addToDo(this.state.task)
        this.setState({
            task: ''
        })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input value={this.state.task} onChange={this.handleChanges} type='text' name='task' />
                <button type='submit'>Add Task</button>
            </form>
        )
    }
}

export default ToDoForm