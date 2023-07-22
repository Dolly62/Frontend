import React, { useState } from "react";
import FormDetails from "./FormDetails";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };

  const editHandler = () => {
    setIsEdit(true);
  };

  const hideFormHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="expenseForm">
      {!isEdit && <button onClick={editHandler}>Add New Expense</button>}
      {isEdit && (
        <FormDetails
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default ExpenseForm;
