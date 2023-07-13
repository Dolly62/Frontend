import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Delhi'
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Faridabad'
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Punjab'
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Gujarat'
    },
  ];
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {/* Added one component */}
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
