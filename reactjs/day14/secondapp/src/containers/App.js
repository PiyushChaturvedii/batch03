import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Ram', age: 28 },
      { id: 'asfa11', name: 789, age: 30 },
      { id: 'asfa12', name: 'Mohan', age: 35 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {



    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          />
        </div >
      );


    }


    return (
      <div className={classes.App}>
        <Cockpit
          title = {this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    )
  }
}





// return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello, This is a React Application!!!!'))


export default App;
