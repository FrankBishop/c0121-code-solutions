import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }));

  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => this.state.todos.push(json))
      .then(json => this.setState({ json }));
  }

  toggleCompleted(todoId) {
    let change;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        change = this.state.todos[i].isCompleted;
      }
    }
    if (change === false) {
      fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          todoId: todoId,
          isCompleted: true
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(json => this.state.todos.splice(todoId - 1, 1, json))
        .then(json => this.setState({ json }));
    } else {
      fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          todoId: todoId,
          isCompleted: false
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(json => this.state.todos.splice(todoId - 1, 1, json))
        .then(json => this.setState({ json }));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}
