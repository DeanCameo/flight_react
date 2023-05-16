import React from 'react';
import { Link } from 'react-router-dom';

function AirlineApiNav({ children }) {
  return (
    <div>
      <h1>Airline Company Api</h1>
      <nav>
        <ul>
          <li>
            <Link to="/company/airline/update">Update Airline Company</Link>
          </li>
          <li>
            <Link to="/company/flight/add">Add Flight</Link>
          </li>
          <li>
            <Link to="/company/flight/update">Update Flight</Link>
          </li>
          <li>
            <Link to="/company/flight/delete">Delete Flight</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default AirlineApiNav;