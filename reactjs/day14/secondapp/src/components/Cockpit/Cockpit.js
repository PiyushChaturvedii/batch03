import React from 'react';
import classes from './Cockpit.module.css';


const cockpit = (props) => {
    let btnClass = [classes.Button]
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    let assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = [red];
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red','bold']
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working.!!!</p>
            <button className={btnClass.join(' ')}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}


export default cockpit;