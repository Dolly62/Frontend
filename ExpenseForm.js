import React from "react";
import FormDetails from "./FormDetails";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (

      <div className="expenseForm">
        <FormDetails onSaveExpenseData={saveExpenseDataHandler} />
      </div>
  );
};

export default ExpenseForm;
