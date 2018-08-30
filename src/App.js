
import React, { Component } from 'react';
import './App.css';
import TodoInput from './Components/todoInput';
import TodoList from './Components/todoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "make dinner", completed: false},
        {id: 1, text: "make lunch", completed: false},
        {id: 2, text: "learn react", completed: false},
      ],
      nextId: 3,
    };
  }

  addTodo = (todo) => {
    // todo.preventDefault(); slice();
    let todos = this.state.todos; 
    todos = todos.concat({id: this.state.nextId, text: todo, completed: false});
    this.setState({
      todos: todos,
      nextId: this.state.nextId+1,
    });
  };

  removeTodo = (id) =>{
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
    console.log(id);
  }


  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(e => id === e.id);

    todos[index] = {
      ...todos[index],
      completed: !todos[index].completed,
    };
    this.setState({ todos });
  }

  save = (todoToSave,id) => {
    const { todos } = this.state;
    const index = todos.findIndex(e => id === e.id);
    todos[index] = {
      ...todos[index],
      text: todoToSave,
    };
    this.setState(todos);
  }

  cancel = () => {
    this.setState({editing: null});
  }

  render() {
    return (
      <div className="todoOutput">
        <h1>TodoList by Jimmy</h1>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.todos} 
          removeTodo={this.removeTodo} 
          handleToggle={this.handleToggle}
          save={this.save}
          cancel={this.cancel}
          /> 
      </div>
    );
  }
}

export default App;