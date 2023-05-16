import React, { useState } from 'react';
import axios from 'axios';

function FlightDataParams() {
  const [flights, setFlights] = useState([]);
  const [originCountryId, setOriginCountryId] = useState('');
  const [destinationCountryId, setDestinationCountryId] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [landingTime, setLandingTime] = useState('');
  const headers = ['Airline Company ID', 'Origin Country ID', 'Destination Country ID', 'Departure Time', 'Landing Time', 'Remaining Tickets']


  async function fetchFlights() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_flight_data/', {
        params: {
          origin_country_id: originCountryId,
          destination_country_id: destinationCountryId,
          departure_time: departureTime,
          landing_time: landingTime,
        },
      });
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchFlights();
  }

  return (
    <div>
      <h2>Search Flight By Params</h2>
      <form onSubmit={handleSubmit}>
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
          <input type="text" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
        </div>
        <div>
          <label>Landing Time:</label>
          <input type="text" value={landingTime} onChange={(e) => setLandingTime(e.target.value)} />
        </div>
        <button type="submit">Search</button>
      </form>
      <table >
        <thead>
          <tr>
            {headers.map(field => <th>{field}</th>)}
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline_company_id}</td>
              <td>{flight.origin_country_id}</td>
              <td>{flight.destination_country_id}</td>
              <td>{flight.departure_time}</td>
              <td>{flight.landing_time}</td>
              <td>{flight.remaining_tickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightDataParams;
