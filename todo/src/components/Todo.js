import React, { Component } from 'react'
import { connect } from 'react-redux';

import {completeTodo} from '../actions';

// const textStyle = {
//     textDecoration: 'line-through'
// }

class Todo extends Component {

    clickHandler = (e, index) => {
        completeTodo(index)
    }

    render() {
        return (
            <div >
                {this.props.todos.map((todo, index) => (
                    <h4 style={ todo.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'} } onClick={e => this.clickHandler(e, index)} key={index}>
                    {todo.value}
                    </h4>
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
    { completeTodo }
)(Todo);

