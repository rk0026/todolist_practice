import React, {Component} from 'react';
import './todoItem.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state= {
            editing: this.props.todo.text,
        }
    }

    addTodo = (todo) => {
        this.props.addTodo(todo)
    }
    
    removeTodo = (id) =>{
        this.props.removeTodo(id)
    }

    changeStyle = () => {
        let targ = this.label;
        let item = this.input;
        if(targ.style.display === "none"){
            targ.style.display = "";
            item.style.display = "none"
        }else{
            targ.style.display="none";
            item.style.display="";
        };
    }

    handleChange = (e) => {
        this.setState({ editing: e.target.value });
    }
    
    handleToggle = (id) => {
        this.props.handleToggle(id)
    }
    
    render() {
        return (
            <div className="todoItem">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onClick={() => this.handleToggle(this.props.id)}
                />
                <label 
                    ref = {r => {this.label = r}}
                    onDoubleClick={() => {
                        this.changeStyle()
                    } }
                >
                    {this.props.todo.text}
                </label>
                <input
                    ref={r => {this.input = r}}
                    style={{display: 'none'}}
                    value={this.state.editing} 
                    onChange={this.handleChange}
                    onKeyDown={(e) => {
                        if(e.keyCode === 13 ) {
                            this.props.save(this.state.editing, this.props.id);
                            this.changeStyle()
                        } else if (e.keyCode === 27) {
                            this.props.cancel();
                            this.changeStyle()
                        };
                    }}  
                />
                <button className="removeTodo" onClick={() => this.removeTodo(this.props.id)}>remove</button>

            </div>
        )
    }
}

export default TodoItem;