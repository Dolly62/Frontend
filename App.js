import { useState } from "react";
import "./App.css";
// import ExpenseItem from "./components/ExpsenseItem";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  
  // const expenses = [
  //   {
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //     location: 'Delhi'
  //   },
  //   {
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //     location: 'Faridabad'
  //   },
  //   {
  //     title: "Car Repairing",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //     location: 'Punjab'
  //   },
  //   {
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //     location: 'Gujarat'
  //   },
  // ];

  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);
    setExpenses((prevExpenses) => 
    [...prevExpenses, expense]
    )
  }


  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      {/* Added one component */}
      {/* {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          location={expense.location}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
    </div>
  );
}

export default App;
