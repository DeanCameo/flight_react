import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CountryDataId() {
    const [country, setCountry]= useState([])
    const [countryId, setCountryId]= useState(0)
    const headers = ['Country ID', 'Country Name']

    useEffect(() => {
        fetchingData();
    },[countryId])

    async function fetchingData() {
        const response = await axios.get(`http://127.0.0.1:8000/api/get_country_data/${countryId}`)
        setCountry(response.data)
    }

    return (
        <div>
        <h2>Search Country By ID </h2>
            <label> Country ID: </label>
            <input value={countryId} onChange={e => setCountryId(e.target.value)}></input>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                        <tr key={country.id}>
                            <td>{country.id}</td>
                            <td>{country.name}</td>
                        </tr>
                </tbody>
            </table>
        </div>
      )
    }
    

export default CountryDataId