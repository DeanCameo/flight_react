import React, { useState } from 'react';
import axios from 'axios';

function AirlineUpdate() {
  const [airline, setAirline] = useState({});
  const [airlineId, setAirlineId] = useState('');
  const [name, setName] = useState('');
  const [countryId, setCountryId] = useState('');
  const [userId, setUserId] = useState('');

  function handleAirlineIdChange(event) {
    setAirlineId(event.target.value);
  }

  async function handleFetchAirline(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get_airline_data/${airlineId}/`);
      setAirline(response.data);
      setName(response.data.name);
      setCountryId(response.data.country_id);
      setUserId(response.data.user_id);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateAirline(event) {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/update_airline/${airlineId}/`, {
        name,
        countryId,
        userId,
      });
      alert('Airline Company updated successfully!');
      setAirline({});
      setName('');
      setCountryId('');
      setUserId('');
    } catch (error) {
      console.error(error);
      alert('Failed to update airline company');
    }
  }

  return (
    <div>
      <h2>Update Airline Company</h2>
      <form onSubmit={handleFetchAirline}>
        <div>
          <label>Airline Company ID:</label>
          <input type="text" value={airlineId} onChange={handleAirlineIdChange} />
          <button type="submit">Fetch Airline Company</button>
        </div>
      </form>
      {airline.id && (
        <form method='POST' onSubmit={handleUpdateAirline}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Country ID:</label>
            <input type="text" value={countryId} onChange={(e) => setCountryId(e.target.value)} />
          </div>
          <div>
            <label>User ID:</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <button type="submit">Update Airline Company</button>
        </form>
      )}
    </div>
  );
}

export default AirlineUpdate;