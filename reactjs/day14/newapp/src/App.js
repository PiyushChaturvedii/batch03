import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';




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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      }



    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}

        </div >
      );
      style.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.persons.length<=2){
      classes.push('red'); //classes = [red];
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red','bold']
    }
    


    return (
      <div className="App" >
        <h1>Hello, React App</h1>
        <p className = {classes.join(' ')}>This is working.!!!</p>
        {persons}
        {/* <button onClick={switchNameHandler.bind(this,"Sita")}>Switch Name</button> */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>



      </div>
    )
  }
}





// return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello, This is a React Application!!!!'))


export default App;
