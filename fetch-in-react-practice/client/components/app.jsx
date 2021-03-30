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
      .then(todos => this.setState({ todos }))
      .catch(err => {
        console.error(err);
      });
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
      .then(todo => {
        const todos = this.state.todos.concat(todo);
        this.setState({ todos });
      })
      .catch(err => {
        console.error(err);
      });
  }

  toggleCompleted(todoId) {
    let todoIndex;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        todoIndex = i;
        break;
      }
    }
    const isCompleted = this.state.todos[todoIndex].isCompleted;
    const toggle = {
      isCompleted: !isCompleted
    };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(toggle),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(updatedTodo => {
        const newTodosList = this.state.todos.slice();
        newTodosList[todoIndex] = updatedTodo;
        this.setState({ todos: newTodosList });
      })
      .catch(err => {
        console.error(err);
      });
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
