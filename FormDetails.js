import React from "react";
import './FormDetails.css'

const FormDetails = () => {
  const showOnConsole = (event) => {
    console.log(event.target.value);
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
            onChange={showOnConsole}
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
            onChange={showOnConsole}
            required
          />
        </div>

        <div className="expense">
          <label for="expenseDate">Expense Date:</label>
          <input
            type="date"
            id="expenseDate"
            name="expenseDate"
            onChange={showOnConsole}
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
