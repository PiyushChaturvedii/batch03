import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';



const App = (props) =>{
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Ram', age: 28 },
      { name: 'Shyam', age: 30 },
      { name: 'Mohan', age: 35 }
    ]
  })

  const [otherState,setOtherState] = useState('some other value')



  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Gita', age: 30 },
        { name: 'Sunita', age: 35 }
      ]
    })
  }
  
  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Sita', age: 28 },
        { name: event.target.value, age: 30 },
        { name: 'Sunita', age: 35 }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App" >
      <h1>Hello, React App</h1>
      <p>This is working.!!!</p>
      {/* <button onClick={switchNameHandler.bind(this,"Sita")}>Switch Name</button> */}
      <button style={style} onClick={switchNameHandler.bind(this,"Sita")}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Sunita')}
      changed = {nameChangeHandler}>My Hobbies: Cooking</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
      
    </div>
  )
}





// return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hello, This is a React Application!!!!'))


export default App;
