import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";




const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        
        setTitle('Updated!!!');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>)
}

export default ExpenseItem;