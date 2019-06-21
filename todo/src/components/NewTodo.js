import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';

class NewTodo extends Component {
    state = {
        newTodo: ""
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({
            newTodo: ""
        })
    };

    render() {
        return (
            <div>
                <input
                type="text"
                value={this.state.newTodo}
                placeholder="Add Todo"
                onChange={this.handleChanges}
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

export default connect(
    mapStateToProps,
    { addNewTodo } 
  )(NewTodo);
  