import React, { useState } from 'react';
import axios from 'axios';

function TicketAdd() {
    const [flightId, setFlightId] = useState('');
    const [customerId, setCustomerId] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://127.0.0.1:8000/api/add_ticket/', {
          flight_id: flightId,
          customer_id: customerId,
        });
        alert('Ticket added successfully!');
        setFlightId('');
        setCustomerId('');
      } catch (error) {
        console.error(error);
        alert('Failed to add ticket');
      }
    }
  
    return (
      <div>
        <h2>Add Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Flight ID:</label>
            <input type="text" value={flightId} onChange={(e) => setFlightId(e.target.value)} />
          </div>
          <div>
            <label>Customer ID:</label>
            <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
          </div>
          <button type="submit">Add Ticket</button>
        </form>
      </div>
    );
  }
  

export default TicketAdd;