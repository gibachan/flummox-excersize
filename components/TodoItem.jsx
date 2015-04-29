import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var style = {
      textDecoration: this.props.completed ? 'line-through' : ''
    };

    return (
      <li>
        <span style={style}>{this.props.text}</span>
        <span onClick={this.onComplete.bind(this)}> [!]</span>
        <span onClick={this.onDelete.bind(this)}> [x]</span>
      </li>
    );
  }

  onComplete() {
    // emit action
    this.props.flux.getActions('todo').toggleTodo(this.props.id);
  }

  onDelete() {
    if (confirm(this.props.text + ' will be deleted. Are you sure?')) {
      // emit action
      this.props.flux.getActions('todo').deleteTodo(this.props.id);
    }
  }
}

TodoItem.propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool
};

export default TodoItem;
