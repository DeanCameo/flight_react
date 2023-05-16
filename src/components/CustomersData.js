import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CustomersData() {
    const [customers, setCustomers]= useState([])
    const headers = ['Customer ID', 'Customer First Name', 'Customer Last Name', 'Customer Address', 'Customer Phone Number', 'Credit Card Number', 'User ID']

    useEffect(() => {
        fetchingData();
    },[])

    async function fetchingData() {
        const response = await axios.get("http://127.0.0.1:8000/api/get_customer_data/")
        setCustomers(response.data)
    }

    return (
        <div>
        <h2>All Customers </h2>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                    customers.map(customer => 
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.first_name}</td>
                            <td>{customer.last_name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone_number}</td>
                            <td>{customer.credit_card_number}</td>
                            <td>{customer.user_id}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
      )
    }
    

export default CustomersData;