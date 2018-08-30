import React, {Component} from 'react';
import './todoInput.css';

class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTodo: "新工作",
        }
    }

    handleChange = (e) => {
        this.setState({newTodo: e.target.value});
    }

    addTodo = (todotext) => {
        if(todotext.length > 0) {
            this.props.addTodo(todotext);
            this.setState({newTodo: ''});
        }
    }


    render(){
        return(
            <div>
                <input className="inputField" type="text" value={this.state.newTodo} onChange={this.handleChange} />
                <button className="btn" id="primary" onClick={() => this.addTodo(this.state.newTodo)}>submit</button>
            </div>
        )
    }

}



export default TodoInput;