import ExpenseItem from "./components/ExpenseItem";
// import Expenses from "./components/Expenses";
import Card from "./components/Card";

const expenses = [
  { id: 'e1', title: "Milk", amount: "300", date: new Date(2023, 2, 23) },
  { id: 'e2', title: "Tea", amount: "500", date: new Date(2023, 2, 22) },
  { id: 'e3', title: "Sugar", amount: "200", date: new Date(2023, 2, 25) },
  { id: 'e4', title: "Water", amount: "100", date: new Date(2023, 2, 26) },
]


function App() {
  return (
    <div>
      <h2> Let's get started!</h2>
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date} />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date} />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date} />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date} />

      </Card>
    </div>
  )
}

export default App;