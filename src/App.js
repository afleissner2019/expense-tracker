import React, { useState, useEffect } from "react";
import ExpenseFile from "./Components/ExpenseFile";
import Error from "./Components/Error";
import ExpenseContainer from "./Components/ExpenseContainer";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

//Dummy
// const dummyPayment = [
//   { id: uuidv4(), bill: "Tuition Fee", amount: 2000 },
//   { id: uuidv4(), bill: "Water Bill", amount: 50 },
// ];
// console.log(dummyPayment);

const initialPayment = localStorage.getItem("payments")
  ? JSON.parse(localStorage.getItem("payments"))
  : [];

function App() {
  //Error State
  const [error, setError] = useState({ show: false });

  // All Payables, additional Payables
  // console.log(useState())
  const [payments, setPayments] = useState(initialPayment);

  // every BillS
  const [bill, setBill] = useState("");
  // every Amount
  const [amount, setAmount] = useState("");
  // console.log(payments)

  // Edit
  const [edit, setEdit] = useState(false);  // false

  // Edit id
  const [editId, setEditId] = useState(0);

  // UseEffect
  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  //Functions
  const errorFunction = ({ type, text }) => {
    setError({ show: true, type, text });
    setTimeout(() => {
      setError({ show: false });
    }, 3000);
  };

  const billFunction = (event) => {
    console.log(`bill ${event.target.value}`);
    setBill(event.target.value);
  };

  const amountFunction = (event) => {
    console.log(`amount ${event.target.value}`);
    setAmount(event.target.value);
  };

  const submitFunction = (event) => {
    event.preventDefault();
    console.log(bill, amount);
    if (bill !== "" && amount > 0) {
      if (edit) {
        
        // const newData = payments.map((item)=>{
        //   if(item.id === editId){
        //     item.bill = bill;
        //     item.amount = amount
        //   }
        //   return item;

        // });
        // console.log('the new data = ',newData);
        // setPayments(newData)
        let prevPayments = payments.map((item) => {
          return item.editId === editId ? { ...item, bill, amount } : item;
        });
        setPayments(prevPayments);
        setEdit(false);
      } else {
        const eachPayment = { id: uuidv4(), bill, amount };
        setPayments([...payments, eachPayment]);
      }

      setBill(""); // Once click on Submit the value will be gone in the input bill and amount field / it will go back to the original state
      setAmount("");
      errorFunction({ type: "success", text: "successfully added!!" });
    } else {
      // manage error
      errorFunction({
        type: "danger",
        text:
          "Oppsss!! invalid Bill or Amount. Kindly fill out the right value",
      });
    }
  };

  // remove all items
  const removeAllFunction = () => {
    console.log("delete all items");
    setPayments([]);
  };
  // single deletion
  const removeEachItemFunction = (id) => {
    console.log(`delete single item: ${id}`);
    let prevPayments = payments.filter((item) => item.id !== id);
    setPayments(prevPayments);
  };
  // Edit

  const editFunction = (id) => {
    console.log(`edit item: ${id}`);
    let Eachexpense = payments.find((item) => item.id === id);
    console.log(Eachexpense);
    let { bill, amount } = Eachexpense;
    setBill(bill);
    setAmount(amount);
    setEdit(true); // give it a signal that we are going to edit it, once we click on the submit button, original true
    setEditId(editId); //
  };

  return (
    <div className="main-header">
      <div className="error">
        {error.show && <Error type={error.type} text={error.text} />}
        <Error />
      </div>
      <h1 className="sub-header">Record Expenses</h1>
      <div className="container">
        <ExpenseContainer
          bill={bill}
          amount={amount}
          billFunction={billFunction}
          amountFunction={amountFunction}
          submitFunction={submitFunction}
          edit={edit}
        />
        <ExpenseFile
          payments={payments}
          removeAllFunction={removeAllFunction}
          removeEachItemFunction={removeEachItemFunction}
          editFunction={editFunction}
        />
      </div>

      {/* to get the total amount */}
      <h2 className="total-amount">
        Total:{" "}
        <span className="total">
          €
          {payments.reduce((totalAmount, currentAmount) => {
            return (totalAmount += parseInt(currentAmount.amount)); // parseInt() to convert into a number not a string
          }, 0)}{" "}
        </span>{" "}
      </h2>
    </div>
  );
}

export default App;
