import React from "react";

function ExpenseContainer({
  bill,
  amount,
  billFunction,
  amountFunction,
  submitFunction,
  edit
}) {
  return (
    <form className="expense-container" onSubmit = {submitFunction}>
      <div className="middle-container">
        <div className="container-group">
          <label htmlFor="bill">Bill</label>
          <input className = "input-field-bill"
            type="text"
            className="input-bill"
            id="bill"
            name="bill"
            placeholder="Kindly enter your Bills"
            value = {bill}
            onChange = {billFunction}
          ></input>
        </div>
      </div>

      <div className="middle-container">
        <div className="container-group">
          <label htmlFor="amount">Amount</label>
          <input className = "input-field-bill"
            type="number"
            className="input-amount"
            id="amount"
            name="amount"
            placeholder="Kindly enter the amount"
            value = {amount}
            onChange = {amountFunction}
          ></input>
        </div>
      </div>
      <button type="submit" className="submit-button">
        {edit ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default ExpenseContainer;
