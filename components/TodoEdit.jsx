import React from 'react';

class TodoEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: props.newTodo
    };
  }

  render() {
    return (
      <form>
        <input type="text" ref="newTodo" value={this.state.newTodo} onChange={this.handleChange.bind(this)} placeholder="New todo" autofocus />
        <input type="submit" value="Add todo" onClick={this.handleSubmit.bind(this)} />
      </form>
    );
  }

  handleChange(e) {
      this.setState({
        newTodo: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newTodo.length === 0) return;

    // emit action
    this.props.flux.getActions('todo').createTodo(this.state.newTodo);

    this.setState({
      newTodo: ''
    });
  }

}

TodoEdit.defaultProps = { newTodo: '' };

export default TodoEdit;
