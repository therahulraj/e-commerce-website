import React, { Component } from 'react';

import './App.css';

import Collection from './container/Collection/Collection';
import Aux from './hoc/Auxilliary.js';

class App extends Component {
  render() {
    return (
      <Aux>
        <Collection />
      </Aux>
    );
  }
}

export default App;
