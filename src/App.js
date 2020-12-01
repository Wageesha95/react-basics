import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'M1'
        },
        {
          name: 'Draqula',
          id: 'M2'
        },
        {
          name: 'zombie',
          id: 'M3'
        },
      ]
    }
  }

  render() {
    return (
      <div className='App'>{
        this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }
      </div>


    )
  }
}

export default App;

