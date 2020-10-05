import React from 'react'
import { BiEditAlt } from "react-icons/bi"; 
import { FiXCircle } from "react-icons/fi";


function ExpenseDetails({expense, editFunction, removeEachItemFunction}) {
    const {id, bill, amount} = expense
    return (
        
        <li className = "list"> 
            <div className = "expense-details">
            <span className = "expense-bill"> {bill}</span>
            <span className = "expense-amount"> €{amount}</span>
            
            
            <button className = "edit-button" aria-label = "edit" onClick = {()=>editFunction(id)} ><BiEditAlt/> </button>
            <button className = "delete-button" aria-label = "delete" onClick = {()=>removeEachItemFunction(id)}><FiXCircle/> </button>
            </div>
            
        </li>
    )
}

export default ExpenseDetails

//ExpenseItem
