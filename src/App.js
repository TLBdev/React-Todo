import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm'
import ToDoList from './components/TodoComponents/TodoList';


const toDos = [
  {
    task: 'test',
    id: 1,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDos: toDos
    }
  }
  changeStatus = target => {
    this.state.toDos.forEach(e => {
      if (e.id === target) {
        // e.setState(
        //   {
        //     completed: !completed
        //   }
        // )
      }
    })
  }
  addToDo = newToDoText => {
    const newToDo = {
      task: newToDoText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    })
    console.log(this.state.toDos)
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDos={this.state.toDos} changeStatus={this.changeStatus} />
        <ToDoForm addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
