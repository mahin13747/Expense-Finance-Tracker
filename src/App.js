import React, { useState } from "react";
import GroupMembers from "./components/GroupMembers";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import SummaryReport from "./components/SummaryReport";
import ShareReport from "./components/ShareReport";

function App() {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Add a new member to the group
  const addMember = (name) => {
    setMembers([...members, { name, amountOwed: 0 }]);
  };

  // Add an expense and calculate shares
  const addExpense = (description, amount, paidBy) => {
    setExpenses([...expenses, { description, amount, paidBy }]);
    calculateOwedAmounts(amount, paidBy);
  };

  // Calculate the amount each person owes or is owed
  const calculateOwedAmounts = (amount, paidBy) => {
    const numOfPeople = members.length;
    const share = amount / numOfPeople;

    // Update each member's balance
    setMembers((prevMembers) => {
      return prevMembers.map((member) => {
        if (member.name === paidBy) {
          member.amountOwed -= amount + share; // Paid more than their share
        } else {
          member.amountOwed += share; // Owes an equal share
        }
        return member;
      });
    });
  };

  return (
    <div className="App">
      <h1>Expense Splitter</h1>

      <GroupMembers members={members} addMember={addMember} />
      <AddExpense addExpense={addExpense} members={members} />
      <ExpenseList expenses={expenses} />
      <SummaryReport members={members} />
      <ShareReport members={members} />
    </div>
  );
}

export default App;
