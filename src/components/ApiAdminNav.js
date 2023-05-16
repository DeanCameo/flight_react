import React from 'react';
import { Link } from 'react-router-dom';

function AdminApiNav({ children }) {
  return (
    <div>
      <h1>Adminisrator Api</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin/customer">All Customers</Link>
          </li>
          <li>
            <Link to="/admin/airline/add">Add Airline Company</Link>
          </li>
          <li>
            <Link to="/admin/customer/add">Add Customer</Link>
          </li>
          <li>
            <Link to="/admin/admin/add">Add Adminisrator</Link>
          </li>
          <li>
            <Link to="/admin/airline/delete">Delete Airline Company</Link>
          </li>
          <li>
            <Link to="/admin/customer/delete">Delete Customer</Link>
          </li>
          <li>
            <Link to="/admin/admin/delete">Delete Adminisrator</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default AdminApiNav;