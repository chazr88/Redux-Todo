import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {
    
    render() {
        console.log(this.props.todos)
        return (
            <React.Fragment>
                   
                    <Todo />

            </React.Fragment>
        )
    }
}

export default TodoList;