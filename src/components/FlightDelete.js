import React, { useState } from 'react';
import axios from 'axios';

function FlightDelete() {
  const [flightId, setFlightId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  function handleFlightIdChange(event) {
    setFlightId(event.target.value);
  }

  async function handleDeleteFlight(event) {
    event.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_flight/${flightId}/`);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to delete flight');
    }
  }

  return (
    <div>
      <h2>Delete Flight</h2>
      <form onSubmit={handleDeleteFlight}>
        <div>
          <label>Flight ID:</label>
          <input type="text" value={flightId} onChange={handleFlightIdChange} />
          <button type="submit">Delete Flight</button>
        </div>
      </form>
      {isDeleted && <p>Flight deleted successfully!</p>}
    </div>
  );
}

export default FlightDelete;