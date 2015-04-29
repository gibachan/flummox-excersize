import { Store } from 'flummox';

class TodoStore extends Store {
  constructor(flux) {
    super();

    const todoIds = flux.getActionIds('todo');

    this.register(todoIds.createTodo, this.handleCreateTodo);
    this.register(todoIds.updateTodo, this.handleUpdateTodo);
    this.register(todoIds.deleteTodo, this.handleDeleteTodo);
    this.register(todoIds.toggleTodo, this.handleToggleTodo);

    this.state = {
      todos: {}
    };
  }

  handleCreateTodo(text) {
    var newTodoId = new Date() + '';
    var newTodo = {
      text: text,
      completed: false
    };

    let todos = {};
    for (var id in this.state.todos) {
      var todo = this.state.todos[id];
      todos[id] = {
        text: todo.text,
        completed: todo.completed
      };
    }
    todos[newTodoId] = newTodo;

    this.setState({ todos });
  }

  handleDeleteTodo(id) {
    let todos = {};
    for (var tmpId in this.state.todos) {
      if (tmpId != id) {
        var todo = this.state.todos[tmpId];
        todos[tmpId] = {
          text: todo.text,
          completed: todo.completed
        };
      }
    }

    // emit change event
    this.setState({ todos });
  }

  handleToggleTodo(id) {
    if (this.state.todos[id] == null) return;

    let todos = {};
    for (var tmpId in this.state.todos) {
      var todo = this.state.todos[tmpId];
      todos[tmpId] = {
        text: todo.text,
        completed: todo.completed
      };
      if (id === tmpId) {
        todos[tmpId].completed = !todos[tmpId].completed;
      }
    }

    // emit change event
    this.setState({ todos });
  }
}

export default TodoStore;
