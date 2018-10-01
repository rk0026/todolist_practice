import React from 'react';
import Proptypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => <TodoItem
        todo={todo}
        key={todo.id}
        id={todo.id}
        removeTodo={props.removeTodo}
        handleToggle={props.handleToggle}
        save={props.save}
        cancel={props.cancel}
      />)
    };
  </ul>
);

TodoList.propTypes = {
  todos: Proptypes.object,
  removeTodo: Proptypes.func,
  handleToggle: Proptypes.func,
  save: Proptypes.func,
  cancel: Proptypes.func,
};

export default TodoList;
