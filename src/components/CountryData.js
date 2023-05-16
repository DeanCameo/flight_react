import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CountryData() {
    const [countries, setCountries]= useState([])
    const headers = ['Country ID', 'Country Name']

    useEffect(() => {
        fetchingData();
    },[])

    async function fetchingData() {
        const response = await axios.get("http://127.0.0.1:8000/api/get_country_data/")
        setCountries(response.data)
    }

    return (
        <div>
        <h2>All Countries </h2>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                    countries.map(country => 
                        <tr key={country.id}>
                            <td>{country.id}</td>
                            <td>{country.name}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
      )
    }
    

export default CountryData