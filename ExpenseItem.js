import React, { useRef, useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
// import Card from './Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseItemRef = useRef(null);
  // const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const deleteExpense = () => {
    if (expenseItemRef.current) {
      expenseItemRef.current.remove();
    }
  };

  const updateExpense = () => {
    setAmount('$100');
  };
  // First component
  return (
    <div className="expense-item" ref={expenseItemRef}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={amount}
      />
      <button className="btn" onClick={deleteExpense}>
        Delete Expense
      </button>
      <button onClick={updateExpense}>Update Expense</button>
    </div>
  );
};

export default ExpenseItem;
