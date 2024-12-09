import React, { useState } from "react";

function GroupMembers({ members, addMember }) {
  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    if (newMember) {
      addMember(newMember);
      setNewMember(""); // Clear input
    }
  };

  return (
    <div>
      <h2>Group Members</h2>
      <input
        type="text"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
        placeholder="Add a new member"
      /> <br></br> <br></br>
      <button onClick={handleAddMember}>Add Member</button>

      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GroupMembers;
