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
    ],
    otherState: 'Some other value'
  };

  switchNameHandler = (newName, newAge) => {
   // console.log('Was clicked!');
   // React will not recognize it don't do this this.state.persons[0].name = 'Tomaras'
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: 'Manu', age: 29 },
        { name: 'Maria', age: 10 }
    ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tom', age: 22 },
        { name: event.target.value, age: 29 },
        { name: 'Maria', age: 10 }
    ]
    } )
  }



  render() {
    return (
      <div className="App">
        <div>Hi, I'm a React App</div>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Tomaras','22')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!','32')}
          changed={this.nameChangedHandler}>My Hobbies: Football</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
