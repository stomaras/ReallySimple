import React, { Component } from 'react';
import classes from'./App.css';
import Person from './Person/Person';




class App extends Component {
  // if state change will lead react to re-render our dom 
  state = {
    persons: [
      { id: 'asf', name: 'max', age: 28 },
      { id: 'bsf', name: 'Manu', age: 29 },
      { id: 'csf', name: 'Maria', age: 37 }
    ],
    otherState: 'Some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id = id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( { persons: persons } );
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }



  render() {
    // Styling here is scoped to the component or to the element you actually add it to, but you have some restrictions 
    // of not being able to leverage the full power of css. You can scope style and still use all the css features.
    // Inline Style .
    

    let persons = null;
    let btnClass = '';

    if( this.state.showPersons ) {
      persons = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      
        <div className={classes.App}>
          <div>Hi, I'm a React App</div>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>Switch name
          </button>
            {persons}
        </div>
      
    );
  }
}

export default App;
