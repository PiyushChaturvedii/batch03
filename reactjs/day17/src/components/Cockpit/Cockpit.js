import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        setTimeout(() => {
            alert('Saved data to cloud.');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[])
    
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })




    let assignedClasses = [];
    let btnClass = [classes.Button];                   
   
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); //classes = [red];
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red','bold']
    }

    return ( 
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working.!!!</p>
            <button className={btnClass.join('')}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}


export default React.memo(Cockpit);