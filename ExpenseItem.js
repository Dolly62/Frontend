import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
// import Card from './Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseItemRef = useRef(null);
  // // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  // const deleteExpense = () => {
  //   if (expenseItemRef.current) {
  //     expenseItemRef.current.remove();
  //   }
  // };


  // First component
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    </div>
  );
};

export default ExpenseItem;
