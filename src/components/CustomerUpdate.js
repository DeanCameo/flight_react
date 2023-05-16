import React, { useState } from 'react';
import axios from 'axios';

function CustomerUpdate() {
  const [customer, setCustomer] = useState({});
  const [customerId, setCustomerId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [creditCard, setCreditCard] = useState('');

  function handleCustomerIdChange(event) {
    setCustomerId(event.target.value);
  }

  async function handleFetchCustomer(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get_customer_data/${customerId}/`);
      setCustomer(response.data);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setAddress(response.data.address);
      setPhoneNumber(response.data.phone_number);
      setCreditCard(response.data.credit_card_number);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateCustomer(event) {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/update_customer/${customerId}/`, {
        firstName,
        lastName,
        address,
        phoneNumber,
        creditCard,
      });
      alert('Customer updated successfully!');
      setCustomer({});
      setFirstName('');
      setLastName('');
      setAddress('');
      setPhoneNumber('');
      setCreditCard('');
    } catch (error) {
      console.error(error);
      alert('Failed to update customer');
    }
  }

  return (
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleFetchCustomer}>
        <div>
          <label>Customer ID:</label>
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
          <button type="submit">Fetch Customer</button>
        </div>
      </form>
      {customer.id && (
        <form method='POST' onSubmit={handleUpdateCustomer}>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div>
            <label>Credit Card Number:</label>
            <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
          </div>
          <button type="submit">Update Customer</button>
        </form>
      )}
    </div>
  );
}

export default CustomerUpdate;