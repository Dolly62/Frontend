import React, { useState } from "react";
import "./FormDetails.css";

const FormDetails = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const enteredTitle = (event) => {
    setTitle(event.target.value);
  };

  const enteredAmount = (event) => {
    setAmount(event.target.value);
  };

  const enteredDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <form className="form">
      <div className="expenses">
        <div className="expense">
          <label for="expenseTitle">Expense Title:</label>
          <input
            type="text"
            id="expenseTitle"
            name="expenseTitle"
            onChange={enteredTitle}
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
            onChange={enteredAmount}
            required
          />
        </div>

        <div className="expense">
          <label for="expenseDate">Expense Date:</label>
          <input
            type="date"
            id="expenseDate"
            name="expenseDate"
            onChange={enteredDate}
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
