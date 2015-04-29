import { Actions } from 'flummox';

class TodoActions extends Actions {
  createTodo(text) {
    return text;
  }

  deleteTodo(id) {
    return id;
  }

  toggleTodo(id) {
    return id;
  }
}

export default TodoActions;
