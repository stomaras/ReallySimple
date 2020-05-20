import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';




class App extends Component {

  // 1st the constructor runs
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // 2nd after the constructor getDerivedStateFromProps runs. For that, 
  // we add a static keyword because it is a static method

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;

  }
  // Now after getDerivedStateFromProps the render method executes


  // 5th componentDidMount will execute
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  // if state change will lead react to re-render our dom 
  // A new more modern syntax of initialiation o constructor
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


  // 3rd the render method executes due to the creation of the component 
  render() {
    // Styling here is scoped to the component or to the element you actually add it to, but you have some restrictions 
    // of not being able to leverage the full power of css. You can scope style and still use all the css features.
    // Inline Style .
    
    console.log('[App.js] render')
    let persons = null;
    

    if( this.state.showPersons ) {

      // 4th after the render method all the child components will be rendered.
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />;
    }
    

    return (
      
        <div className={classes.App}>
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            />
          
            {persons}
        </div>
      
    );
  }
}

export default App;
