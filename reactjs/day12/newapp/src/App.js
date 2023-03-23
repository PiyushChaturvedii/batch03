import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { id:'asfa1', name: 'Ram', age: 28 },
      { id: 'asfa11', name: 789, age: 30 },
      { id: 'asfa12',name: 'Mohan', age: 35 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event=789,id=asfa11) => {
    const personIndex = 1 = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {id:'asfa11',name:789,age:30} {
      ...this.state.persons[personIndex]
    }
    person.name=789 = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
      }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
  
  render() {
  
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            key={person.id}
              changed={(event)=>this.nameChangeHandler(event, person.id)} />
          })}
         
        </div >
      );
    }

  
  
  
  
  
    return (
      <div className="App" >
        <h1>Hello, React App</h1>
        <p>This is working.!!!</p>
        {/* <button onClick={switchNameHandler.bind(this,"Sita")}>Switch Name</button> */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}



      </div>
    )
  }
}





// return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello, This is a React Application!!!!'))


export default App;
