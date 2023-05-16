import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TicketData() {
    const [tickets, setTickets]= useState([])
    const headers = ['Ticket ID', 'Flight ID', 'Customer ID']

    useEffect(() => {
        fetchingData();
    },[])

    async function fetchingData() {
        const response = await axios.get("http://127.0.0.1:8000/api/get_tickets_data/")
        setTickets(response.data)
    }

    return (
        <div>
        <h2>All Tickets </h2>
            <table >
                <thead>
                    <tr>
                        {headers.map(field => <th>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                    tickets.map(ticket => 
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.flight_id}</td>
                            <td>{ticket.customer_id}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
      )
    }
    

export default TicketData