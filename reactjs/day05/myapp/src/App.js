import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
      { id: 'e1', title: "Milk", amount: "300", date: new Date(2023, 2, 23) },
    { id: 'e2', title: "Tea", amount: "500", date: new Date(2023, 2, 22) },
    { id: 'e3', title: "Sugar", amount: "200", date: new Date(2023, 2, 25) },
    { id: 'e4', title: "Water", amount: "100", date: new Date(2023, 2, 26) },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
