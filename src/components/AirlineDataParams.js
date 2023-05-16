import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AirlineDataParams() {
    const [airlines, setAirlines]= useState([])
    const [name, setName] = useState('')
    const [countryId, setCountryId] = useState('')
    const headers = [ 'Airline Company Name', 'Country ID']

    async function fetchAirlines() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/get_airline_data/', {
            params: {
              name: name,
              country_id: countryId,
            },
          });
          setAirlines(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        fetchAirlines();
      }
    
      return (
        <div>
          <h2>Search Airline Company By Params</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Country ID:</label>
              <input type="text" value={countryId} onChange={(e) => setCountryId(e.target.value)} />
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
              {airlines.map((airline) => (
                <tr key={airline.id}>
                  <td>{airline.name}</td>
                  <td>{airline.country_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    

export default AirlineDataParams;