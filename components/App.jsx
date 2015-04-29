import React from 'react';
import FluxComponent from 'flummox/component';

import TodoEdit from './TodoEdit.jsx';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <FluxComponent>
          <TodoEdit />
        </FluxComponent>
        <FluxComponent connectToStores={['todo']}>
          <TodoList />
        </FluxComponent>
      </div>
    );
  }
}

export default App;
