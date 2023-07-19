import React, { useState } from "react";
import "./FormDetails.css";

const FormDetails = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  // form Submitted Handler
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="expenses">
        <div className="expense">
          <label for="expenseTitle">Expense Title:</label>
          <input
            type="text"
            id="expenseTitle"
            name="expenseTitle"
            value={title}
            onChange={titleChangedHandler}
            required
          />
        </div>

        <div className="expense">
          <label for="expenseAmount">Expense Amount:</label>
          <input
            type="number"
            id="expenseAmount"
            name="expenseAmount"
            min="0.00"
            value={amount}
            onChange={amountChangedHandler}
            required
          />
        </div>

        <div className="expense">
          <label for="expenseDate">Expense Date:</label>
          <input
            type="date"
            id="expenseDate"
            name="expenseDate"
            value={date}
            onChange={dateChangedHandler}
            required
          />
        </div>
      </div>

      <div className="submitAction">
        <button type="submit">Add Expense</button>
      </div>
    </form>
    
  );
};

export default FormDetails;
