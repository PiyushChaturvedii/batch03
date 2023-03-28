import React from "react";
import classes from './Person.module.css';
// import styled from 'styled-components';



// const StyleDiv = styled.div`
//     width: 80%;
//     margin: 16px auto;
//     border: 1px solid #07ec3c;
//     box-shadow: 0 2px 3px #d41313;
//     padding: 16px;
//     text-align: center;
// `



const person = (props) => {
    return (
        <div className = {classes.Person}>
        {/* // <StyleDiv> */}

            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            
        {/* </StyleDiv> */}
         </div>
    )
}

export default person;