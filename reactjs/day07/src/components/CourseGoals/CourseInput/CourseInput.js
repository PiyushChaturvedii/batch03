import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState('true');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    // <------------------------ inline-css module ---------------->
    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control">
    //     <label style={{color:!isValid?'red':'black'}}>Course Goal</label>
    //     <input
    //       style={{
    //         borderColor: !isValid ? 'red' : 'black',
    //         background: !isValid ? 'pink' : 'transparent'
    //       }}
    //       type="text" onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // <--------------------- Dynamic Classes ------------>
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};



export default CourseInput;
