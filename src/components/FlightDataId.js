import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FlightDataId() {
    const [flight, setFlight]= useState({})
    const [flightId, setFlightId]= useState(0)
    const headers = ['Airline Company ID', 'Origin Country ID', 'Destination Country ID', 'Departure Time', 'Landing Time', 'Remaining Tickets']

    useEffect(() => {
        fetchingData();
    },[flightId])

    async function fetchingData() {
        const response = await axios.get(`http://127.0.0.1:8000/api/get_flight_data/${flightId}`)
        setFlight(response.data)
    }

    return (
        <div>
        <h2>Search Flight By ID</h2>
            <label> Flight ID: </label>
            <input value={flightId} onChange={e => setFlightId(e.target.value)}></input>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr key={flight.id}>
                        <td>{flight.airline_company_id}</td>
                        <td>{flight.origin_country_id}</td>
                        <td>{flight.destination_country_id}</td>
                        <td>{flight.departure_time}</td>
                        <td>{flight.landing_time}</td>
                        <td>{flight.remaining_tickets}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
    }
    

export default FlightDataId