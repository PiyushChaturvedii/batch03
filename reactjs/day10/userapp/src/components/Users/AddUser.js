import { React, useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErroModal";

import classes from './AddUser.module.css';


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";

    }


    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label id="username">Username</label>
                    <input

                        ref={nameInputRef}
                        id="username"
                        type="text"

                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        ref={ageInputRef} id="age" type="number" />
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </Wrapper>
    )
}



export default AddUser;