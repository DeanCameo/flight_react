import React, { useState } from 'react';
import axios from 'axios';

function CustomerAdd() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [creditCard, setCreditCard] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://127.0.0.1:8000/api/add_customer/', {
          first_name: firstName,
          last_name: lastName,
          address: address,
          phone_number: phoneNumber,
          credit_card_number: creditCard,
        });
        alert('Customer added successfully!');
        setFirstName('');
        setLastName('');
        setAddress('');
        setPhoneNumber('');
        setCreditCard('');
      } catch (error) {
        console.error(error);
        alert('Failed to add customer');
      }
    }
  
    return (
      <div>
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Add Customer</button>
        </form>
      </div>
    );
  }
  

export default CustomerAdd;