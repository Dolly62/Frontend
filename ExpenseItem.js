import React, {useRef} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
// import Card from './Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseItemRef = useRef(null);
  
  const deleteExpense = () => {
if (expenseItemRef.current){
  expenseItemRef.current.remove();
}
  
  };
  // First component
  return (
    <div className="expense-item" ref={expenseItemRef}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button className="btn" onClick={deleteExpense}>
        Delete Expense
      </button>
    </div>
  );
};

export default ExpenseItem;
