import React, { useState } from 'react';
import axios from 'axios';

function FlightUpdate() {
  const [flight, setFlight] = useState({});
  const [flightId, setFlightId] = useState('');
  const [airlineCompanyId, setAirlineCompanyId] = useState('');
  const [originCountryId, setOriginCountryId] = useState('');
  const [destinationCountryId, setDestinationCountryId] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [landingTime, setLandingTime] = useState('');
  const [remainingTickets, setRemainingTickets] = useState('');

  function handleFlightIdChange(event) {
    setFlightId(event.target.value);
  }

  async function handleFetchFlight(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get_flight_data/${flightId}/`);
      setFlight(response.data);
      setAirlineCompanyId(response.data.airline_company_id);
      setOriginCountryId(response.data.origin_country_id);
      setDestinationCountryId(response.data.destination_country_id);
      setDepartureTime(response.data.departure_time);
      setLandingTime(response.data.landing_time);
      setRemainingTickets(response.data.remaining_tickets);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateFlight(event) {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/update_flight/${flightId}/`, {
        airlineCompanyId,
        originCountryId,
        destinationCountryId,
        departureTime,
        landingTime,
        remainingTickets,
      });
      alert('Flight updated successfully!');
      setFlight({});
      setAirlineCompanyId('');
      setOriginCountryId('');
      setDestinationCountryId('');
      setDepartureTime('');
      setLandingTime('');
      setRemainingTickets('');
    } catch (error) {
      console.error(error);
      alert('Failed to update flight');
    }
  }

  return (
    <div>
      <h2>Update Flight</h2>
      <form onSubmit={handleFetchFlight}>
        <div>
          <label>Flight ID:</label>
          <input type="text" value={flightId} onChange={handleFlightIdChange} />
          <button type="submit">Fetch Flight</button>
        </div>
      </form>
      {flight.id && (
        <form method='POST' onSubmit={handleUpdateFlight}>
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
          <button type="submit">Update Flight</button>
        </form>
      )}
    </div>
  );
}

export default FlightUpdate;