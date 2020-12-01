import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'Hello All'
    }
  }

  render() {
    return (
      <div className='App'>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: 'Hello Thilina,' })}>Change text</button>
      </div>


    )
  }
}

export default App;

