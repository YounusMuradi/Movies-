import { useState } from "react";

function Expense () {
  const [expense ,setExpense] =useState([])
  const [showExpense ,setShowExpense]= useState('')
const Addexpense=()=>{
  if(expense.trim() !== ""){
    setShowExpense([...showExpense,expense]);
    setExpense("")
  }
}


  return ( 
    <div>
      <h1>Enter Your Expense</h1>
      <input  
      type="text"
      value={expense}
      placeholder="Write"
      onChange={(e)=> setExpense(e.target.value)}
      />
      <button onClick={Addexpense}>Add Expense</button>
      <ul >
        {showExpense.map((n ,index) => (
          <li key={index} >{n}</li>
        ))}

      </ul>
    </div>


   );
}


export default Expense;