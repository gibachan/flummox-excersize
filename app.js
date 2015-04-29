import React from 'react';
import Flummox from 'flummox';
import FluxComponent from 'flummox/component';

import Actions from './actions/Actions';
import TodoStore from './stores/TodoStore';

import App from './components/App.jsx';

class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('todo', Actions);
    this.createStore('todo', TodoStore, this);
  }
}

const flux = new Flux();

React.render(
  <FluxComponent flux={flux}>
    <App />
  </FluxComponent>,
  document.getElementById('app'));
