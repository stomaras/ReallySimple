import React, { Component } from 'react';

import Person from './Person/Person'

class Persons extends Component {
        static getDerivedStateFromProps(props, state) {
          console.log('[Persons.js] getDerivedStateFromProps');
          return state;
        }

        //gets the next props, so the upcoming props which will have an effect right after this update and the upcoming state as arguments
        // We return true if react continue updating or false if it shouldn't 
        shouldComponentUpdate(nextProps, nextState) {
          console.log('[Persons.js] shouldComponentUpdate');
          return true;
        }

        // Snapshot is a data package, so to say which you then receive in componentDidUpdate, 
        // so that you can have some state right before the update, like the scroll position i mentioned and then you can 
        // use it to update the DOM again or update the scrolling of the user's let's say in componentDidUpdate once the DOM 
        // has been re-rendered and to demonstrate  this here, i will just return an object with a message of snapshot.
        getSnapshotBeforeUpdate(prevProps, prevState){
          console.log('[persons.js] getSnapshotBeforeUpdate');
          return { message: 'Snapshot' };
        }

        // Will run once we are done with all the updating.
        // Most important takeaway , the hook you will use by far most often will be componentDidUpdate which is 
        // after the update finished when you for example need to fetch new data from a server 
        componentDidUpdate(prevProps, prevState, snapshot) {
          console.log('[Persons.js] componentDidUpdate');
          console.log(snapshot);
        }


        render() {
          console.log('[Persons.js] rendering...');
          return this.props.persons.map((person, index) => {
            return (
            <Person
              click={() => this.props.clicked(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.props.changed(event, person.id)} 
              />
            );
          });
        }
    }
export default Persons;