import React  from 'react';
import TodoItem from './todoItem';

// class TodoList extends Component {

const TodoList = (props) => {
    return(
        <ul >
           {
                props.todos.map((todo) =>{
                    return (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        id={todo.id} 
                        removeTodo={props.removeTodo} 
                        handleToggle={props.handleToggle}
                        save={props.save}
                        cancel={props.cancel} 
                    />)
            })}
        </ul>
    );
};

export default TodoList;