import React from 'react';
import FluxComponent from 'flummox/component';

import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var todos = this.props.todos;
    var items = [];
    for (var id in todos) {
      var todo = todos[id];
      items.push(
        <TodoItem key={id} id={id} text={todo.text} completed={todo.completed} />
      );
    }
    return (
      <ul>
        <FluxComponent>
          {items}
        </FluxComponent>
      </ul>
    );
  }
}

export default TodoList;
