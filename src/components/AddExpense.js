import React, { useState } from "react";

function AddExpense({ addExpense, members }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const handleAddExpense = () => {
    if (description && amount && paidBy) {
      addExpense(description, parseFloat(amount), paidBy);
      setDescription(""); // Clear input
      setAmount("");
      setPaidBy("");
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      /> <span></span>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      /> <br></br><br></br>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="">Paid by</option>
        {members.map((member, index) => (
          <option key={index} value={member.name}>
            {member.name}
          </option>
        ))}
      </select> <span></span>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default AddExpense;
