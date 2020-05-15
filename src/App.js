import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // if state change will lead react to re-render our dom 
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Maria', age: 37 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }



  render() {
    return (
      <div className="App">
        <div>Hi, I'm a React App</div>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
