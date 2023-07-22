import React, { useState } from "react";
import "./FormDetails.css";

const FormDetails = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangedHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
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
    setTitle("");
    setAmount("");
    setDate("");
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
            step="0.01"
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
            min="2019-01-01"
            max="2022-12-31 "
            value={date}
            onChange={dateChangedHandler}
            required
          />
        </div>
      </div>

      <div className="submitAction">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default FormDetails;
