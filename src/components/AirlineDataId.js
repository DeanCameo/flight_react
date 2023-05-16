import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AirlineDataId() {
    const [airline, setAirline]= useState([])
    const [airlineId, setAirlineId]= useState(0)
    const headers = ['Airline Company Name', 'Country ID', 'User ID']

    useEffect(() => {
        fetchingData();
    },[airlineId])

    async function fetchingData() {
        const response = await axios.get(`http://127.0.0.1:8000/api/get_airline_data/${airlineId}`)
        setAirline(response.data)
    }

    return (
        <div>
        <h2>Search Airline Company By ID </h2>
            <label> Airline Company ID: </label>
            <input value={airlineId} onChange={e => setAirlineId(e.target.value)}></input>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr key={airline.id}>
                        <td>{airline.name}</td>
                        <td>{airline.country_id}</td>
                        <td>{airline.user_id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
    }
    

export default AirlineDataId