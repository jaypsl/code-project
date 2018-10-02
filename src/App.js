import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SelectCharacter from './components/selectcharacter';

import characters from './char';


class App extends Component {
  render() {
    return (
      <div>
        <SelectCharacter characters={characters.characters}/>
      </div>
    );
  }
}

export default App;
