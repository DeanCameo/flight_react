import React, { useState } from 'react';
import axios from 'axios';

function CustomerDelete() {
  const [customerId, setCustomerId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  function handleCustomerIdChange(event) {
    setCustomerId(event.target.value);
  }

  async function handleDeleteCustomer(event) {
    event.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_customer/${customerId}/`);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to delete Customer');
    }
  }

  return (
    <div>
      <h2>Delete Customer</h2>
      <form onSubmit={handleDeleteCustomer}>
        <div>
          <label>Customer ID:</label>
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
          <button type="submit">Delete Customer</button>
        </div>
      </form>
      {isDeleted && <p>Customer deleted successfully!</p>}
    </div>
  );
}

export default CustomerDelete;