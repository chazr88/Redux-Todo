import React, { Component } from 'react'
import { connect } from 'react-redux';

import {addNewTodo} from '../actions';

class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => (
                    <h4 key={index}>{todo.value}</h4>

                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addNewTodo }
)(Todo);

