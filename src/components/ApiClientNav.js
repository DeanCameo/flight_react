import React from 'react';
import { Link } from 'react-router-dom';

function ClientApiNav({ children }) {
  return (
    <div>
      <h1>Client Api</h1>
      <nav>
        <ul>
          <li>
            <Link to="/client/customer/update">Update Customer</Link>
          </li>
          <li>
            <Link to="/client/ticket/add">Add Ticket</Link>
          </li>
          <li>
            <Link to="/client/ticket/delete">delete Ticket</Link>
          </li>
          <li>
            <Link to="/client/ticket">All Tickets</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default ClientApiNav;