function ShareReport({ members }) {
    const generateReport = () => {
      return members
        .map((member) => `${member.name}: $${member.amountOwed.toFixed(2)}`)
        .join("\n");
    };
  
    const handleShare = () => {
      const report = generateReport();
      alert("Share this report:\n" + report);
    };
  
    return (
      <div>
        <h2>Shareable Report</h2>
        <button onClick={handleShare}>Share Report</button>
      </div>
    );
  }
  
  export default ShareReport;
  