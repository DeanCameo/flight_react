import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FlightData() {
    const [flights, setFlights]= useState([])
    const headers = ['Airline Company ID', 'Origin Country ID', 'Destination Country ID', 'Departure Time', 'Landing Time', 'Remaining Tickets']

    useEffect(() => {
        fetchingData();
    },[])

    async function fetchingData() {
        const response = await axios.get("http://127.0.0.1:8000/api/get_flight_data/")
        setFlights(response.data)
    }

    return (
        <div>
        <h2>All Flights </h2>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                    flights.map(flight => 
                        <tr key={flight.id}>
                            <td>{flight.airline_company_id}</td>
                            <td>{flight.origin_country_id}</td>
                            <td>{flight.destination_country_id}</td>
                            <td>{flight.departure_time}</td>
                            <td>{flight.landing_time}</td>
                            <td>{flight.remaining_tickets}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
      )
    }
    

export default FlightData