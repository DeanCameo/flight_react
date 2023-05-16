import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AirlineData() {
    const [airlines, setAirlines]= useState([])
    const headers = ['Airline Company ID', 'Airline Company Name', 'Country ID', 'User ID']

    useEffect(() => {
        fetchingData();
    },[])

    async function fetchingData() {
        const response = await axios.get("http://127.0.0.1:8000/api/get_airline_data/")
        setAirlines(response.data)
    }

    return (
        <div>
        <h2>All Airline Companies </h2>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                    airlines.map(airline => 
                        <tr key={airline.id}>
                            <td>{airline.id}</td>
                            <td>{airline.name}</td>
                            <td>{airline.country_id}</td>
                            <td>{airline.user_id}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
      )
    }
    

export default AirlineData