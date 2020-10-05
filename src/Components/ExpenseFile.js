import React from 'react'
import ExpenseDetails from "./ExpenseDetails"
import { AiTwotoneDelete } from "react-icons/ai";

function ExpenseFile ({payments, removeAllFunction, removeEachItemFunction, editFunction}) {
    return (
        <> 
        <ul className = "list-expense">
            {payments.map((expense)=>{
                return <ExpenseDetails key = {expense.id} expense = {expense} removeEachItemFunction = {removeEachItemFunction} editFunction = {editFunction} />;

            })}

        </ul>
        {payments.length > 0 && ( <button className = "remove-btn" onClick = {removeAllFunction} >Remove <AiTwotoneDelete className = "remove-icon"/> </button>)}
            
            
        </>
    )
}

export default ExpenseFile
// ExpenseList
