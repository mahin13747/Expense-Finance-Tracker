function ExpenseList({ expenses }) {
    return (
      <div>
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description} - ${expense.amount} (Paid by: {expense.paidBy})
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExpenseList;
  