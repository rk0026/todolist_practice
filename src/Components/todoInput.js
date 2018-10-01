import React, { Component } from 'react';
import './todoInput.css';
import PropTypes from 'prop-types';

class TodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  }

  addTodo = (todotext) => {
    if (todotext.length > 0) {
      this.props.addTodo(todotext);
      this.setState({ newTodo: '' });
    }
  }

  render() {
    return (
      <div>
          <input className="inputField" type="text" value={this.state.newTodo} onChange={this.handleChange} placeholder ="請輸入新工作"/>
          <button className="btn" id="primary" onClick={() => { this.addTodo(this.state.newTodo); }}>submit</button>
      </div>
    );
  }
}

export default TodoInput;
