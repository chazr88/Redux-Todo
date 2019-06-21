import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NewTodo />
          <TodoList />
        </header>

      </div>
    );
  }
}

export default App;
