function SummaryReport({ members }) {
    return (
      <div>
        <h2>Summary Report</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>
              {member.name}: ${member.amountOwed.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SummaryReport;
  