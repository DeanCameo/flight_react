import React, { useState } from 'react';
import axios from 'axios';

function AirlineAdd() {
    const [name, setName] = useState('');
    const [countryId, setCountryId] = useState('');
    const [userId, setUserId] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://127.0.0.1:8000/api/add_airline/', {
          name: name,
          country_id: countryId,
          user_id: userId,
        });
        alert('Airline Company added successfully!');
        setName('');
        setCountryId('');
        setUserId('');
      } catch (error) {
        console.error(error);
        alert('Failed to add airline company');
      }
    }
  
    return (
      <div>
        <h2>Add Airline Company</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Airline Company Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Airline Company Country ID:</label>
            <input type="text" value={countryId} onChange={(e) => setCountryId(e.target.value)} />
          </div>
          <div>
            <label>Airline Company User ID:</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <button type="submit">Add Airline Company</button>
        </form>
      </div>
    );
  }
  

export default AirlineAdd;