import React, { useState } from 'react';
import axios from 'axios';

function FlightAdd() {
    const [airlineCompanyId, setAirlineCompanyId] = useState('');
    const [originCountryId, setOriginCountryId] = useState('');
    const [destinationCountryId, setDestinationCountryId] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [landingTime, setLandingTime] = useState('');
    const [remainingTickets, setRemainingTickets] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://127.0.0.1:8000/api/add_flight/', {
          airline_company_id: airlineCompanyId,
          origin_country_id: originCountryId,
          destination_country_id: destinationCountryId,
          departure_time: departureTime,
          landing_time: landingTime,
          remaining_tickets: remainingTickets,
        });
        alert('Flight added successfully!');
        setAirlineCompanyId('');
        setOriginCountryId('');
        setDestinationCountryId('');
        setDepartureTime('');
        setLandingTime('');
        setRemainingTickets('');
      } catch (error) {
        console.error(error);
        alert('Failed to add flight');
      }
    }
  
    return (
      <div>
        <h2>Add Flight</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Airline Company ID:</label>
            <input type="text" value={airlineCompanyId} onChange={(e) => setAirlineCompanyId(e.target.value)} />
          </div>
          <div>
            <label>Origin Country ID:</label>
            <input type="text" value={originCountryId} onChange={(e) => setOriginCountryId(e.target.value)} />
          </div>
          <div>
            <label>Destination Country ID:</label>
            <input type="text" value={destinationCountryId} onChange={(e) => setDestinationCountryId(e.target.value)} />
          </div>
          <div>
            <label>Departure Time:</label>
            <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
          </div>
          <div>
            <label>Landing Time:</label>
            <input type="datetime-local" value={landingTime} onChange={(e) => setLandingTime(e.target.value)} />
          </div>
          <div>
            <label>Remaining Tickets:</label>
            <input type="text" value={remainingTickets} onChange={(e) => setRemainingTickets(e.target.value)} />
          </div>
          <button type="submit">Add Flight</button>
        </form>
      </div>
    );
  }
  

export default FlightAdd;