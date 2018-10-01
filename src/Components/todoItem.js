import React, { Component } from 'react';
import './todoItem.css';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object,
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    handleToggle: PropTypes.func,
    id: PropTypes.number,
    save: PropTypes.func,
    cancel: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.todo.text,
      isEdited: false,
    };
  }

  addTodo = (todo) => {
    this.props.addTodo(todo);
  }

  removeTodo = (id) => {
    this.props.removeTodo(id);
  }

  changeStyle = () => {
    const isedited = !this.state.isEdited;
    console.log(isedited);
    this.setState({ isEdited: isedited });
  }

  handleChange = (e) => {
    this.setState({ editing: e.target.value });
  }


  render() {
    return (
      <div className="todoItem">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onClick={this.props.handleToggle.bind(null, this.props.id)}
        />
        <label
          // ref = {(r) => { this.label = r; }}
          style={{ display: this.state.isEdited ? 'none' : 'block' }}
          onDoubleClick={() => {
            this.changeStyle();
          }}
        >
          {this.props.todo.text}
        </label>
        <input
          // ref={(r) => { this.input = r; }}
          style={{ display: this.state.isEdited ? 'block' : 'none' }}
          // className={this.state.editing ? 'show' : 'hidden'}
          value={this.state.editing}
          onChange={this.handleChange}
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              this.props.save(this.state.editing, this.props.id);
              this.changeStyle();
            } else if (event.keyCode === 27) {
              this.props.cancel();
              this.changeStyle();
            }
          }}
          onBlur={() => { this.props.cancel(); this.changeStyle(); }}
        />
        <button className="removeTodo" onClick={() => this.removeTodo(this.props.id)}>remove</button>
      </div>
    );
  }
}

export default TodoItem;
