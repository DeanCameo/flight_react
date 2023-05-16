import React, { useState } from 'react';
import axios from 'axios';

function AirlineDelete() {
  const [airlineId, setAirlineId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  function handleAirlineIdChange(event) {
    setAirlineId(event.target.value);
  }

  async function handleDeleteAirline(event) {
    event.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_airline/${airlineId}/`);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to delete airline company');
    }
  }

  return (
    <div>
      <h2>Delete Airline Company</h2>
      <form onSubmit={handleDeleteAirline}>
        <div>
          <label>Airline Company ID:</label>
          <input type="text" value={airlineId} onChange={handleAirlineIdChange} />
          <button type="submit">Delete Airline Company</button>
        </div>
      </form>
      {isDeleted && <p>Airline Company deleted successfully!</p>}
    </div>
  );
}

export default AirlineDelete;