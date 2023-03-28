import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
// import styled from 'styled-components';


// const StyleButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;

//       &:hover{
//         background-color: ${props=>props.alt?'salmon':'lightgreen'};
//         color:black;
//       }
// `;


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
    let btnClass = [classes.Button]

    /* const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      } */



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
      /* style.backgroundColor = 'red'; */
      btnClass.push(classes.Red);
    }

    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red); //classes = [red];
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red','bold']
    }
    // console.log(assignedClasses.join(" "));
    


    return (
      <div className={classes.App }>
        <h1>Hello, React App</h1>
        <p className = {assignedClasses.join(' ')}>This is working.!!!</p>
        {/* <button onClick={switchNameHandler.bind(this,"Sita")}>Switch Name</button> */}
        <button className={btnClass.join(' ')}
          /* style={style} */
          // alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

            {persons}


      </div>
    )
  }
}





// return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello, This is a React Application!!!!'))


export default App;
