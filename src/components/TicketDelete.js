import React, { useState } from 'react';
import axios from 'axios';

function TicketDelete() {
  const [ticketId, setTicketId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  function handleTicketIdChange(event) {
    setTicketId(event.target.value);
  }

  async function handleDeleteTicket(event) {
    event.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_tickets/${ticketId}/`);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to delete ticket');
    }
  }

  return (
    <div>
      <h2>Delete Ticket</h2>
      <form onSubmit={handleDeleteTicket}>
        <div>
          <label>Ticket ID:</label>
          <input type="text" value={ticketId} onChange={handleTicketIdChange} />
          <button type="submit">Delete Ticket</button>
        </div>
      </form>
      {isDeleted && <p>Ticket deleted successfully!</p>}
    </div>
  );
}

export default TicketDelete;