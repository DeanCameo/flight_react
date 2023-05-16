import React from 'react';
import { Link } from 'react-router-dom';

function BaseApiNav({ children }) {
  return (
    <div>
      <h1>Base Api</h1>
      <nav>
        <ul>
          <li>
            <Link to="/flight/">All Flights</Link>
          </li>
          <li>
            <Link to="/flight/id/">Get Flight By ID</Link>
          </li>
          <li>
            <Link to="/flight/params/">Get Flight By Parameters</Link>
          </li>
          <li>
            <Link to="/airline/">All Airline Companies</Link>
          </li>
          <li>
            <Link to="/airline/id/">Get Airline Company By ID</Link>
          </li>
          <li>
            <Link to="/airline/params/">Get Airline Company By Parameters</Link>
          </li>
          <li>
            <Link to="/country/">All Countries</Link>
          </li>
          <li>
            <Link to="/country/id/">Get Country By ID</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default BaseApiNav;