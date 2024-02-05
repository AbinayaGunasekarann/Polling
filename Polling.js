import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Polling.css';
function Polling() {
  const navigate = useNavigate();

  // Use state to manage poll data
  const [pollData, setPollData] = useState({
    ellieGoulding: 0,
    edSheeran: 0,
    samSmith: 0,
    taylorSwift: 0,
  });

  // Function to handle vote
  const handleVote = (pollOption) => {
    setPollData((prevData) => ({
      ...prevData,
      [pollOption]: prevData[pollOption] + 1,
    }));
  };

  // Function to handle logout
  const handleLogout = () => {
    // Navigate to the home page on logout
    navigate('/');
  };

  return (
    <div>
      <h2>Polling Page</h2>

      {/* Ellie Goulding Poll */}
      <div>
        <h3>Ellie Goulding Poll</h3>
        <p>{`Votes: ${pollData.ellieGoulding}`}</p>
        <button onClick={() => handleVote('ellieGoulding')}>Vote</button>
      </div>

      {/* Ed Sheeran Poll */}
      <div>
        <h3>Ed Sheeran Poll</h3>
        <p>{`Votes: ${pollData.edSheeran}`}</p>
        <button onClick={() => handleVote('edSheeran')}>Vote</button>
      </div>

      {/* Sam Smith Poll */}
      <div>
        <h3>Sam Smith Poll</h3>
        <p>{`Votes: ${pollData.samSmith}`}</p>
        <button onClick={() => handleVote('samSmith')}>Vote</button>
      </div>

      {/* Taylor Swift Poll */}
      <div>
        <h3>Taylor Swift Poll</h3>
        <p>{`Votes: ${pollData.taylorSwift}`}</p>
        <button onClick={() => handleVote('taylorSwift')}>Vote</button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Polling;
