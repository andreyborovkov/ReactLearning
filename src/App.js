import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Andrey" age="24" />
        <Person name="Stephanie" age="21"> My Hobbies: Racing </Person>
        <Person name="Max" age="28" />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
