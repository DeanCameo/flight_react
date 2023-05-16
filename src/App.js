import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import FlightData from './components/FlightData';
import FlightDataId from './components/FlightDataId';
import FlightDataParams from './components/FlightDataParams';
import AirlineData from './components/AirlineData';
import AirlineDataId from './components/AirlineDataId';
import AirlineDataParams from './components/AirlineDataParams';
import CountryData from './components/CountryData';
import CountryDataId from './components/CountryDataId';
import CustomerUpdate from './components/CustomerUpdate';
import TicketAdd from './components/TicketAdd';
import TicketDelete from './components/TicketDelete';
import TicketData from './components/TicketData';
import AirlineUpdate from './components/AirlineUpdate';
import FlightAdd from './components/FlightAdd';
import FlightUpdate from './components/FlightUpdate';
import FlightDelete from './components/FlightDelete';
import CustomersData from './components/CustomersData';
import AirlineAdd from './components/AirlineAdd';
import CustomerAdd from './components/CustomerAdd';
import AdminAdd from './components/AdminAdd';
import AirlineDelete from './components/AirlineDelete';
import CustomerDelete from './components/CustomerDelete';
import AdminDelete from './components/AdminDelete';
import Layout from './components/ApiBaseNav';
import BaseApiNav from './components/ApiBaseNav';
import ClientApiNav from './components/ApiClientNav';
import AirlineApiNav from './components/ApiAirlineNav';
import AdminApiNav from './components/ApiAdminNav';
import BackToDjango from './components/BackToDjango';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseApiNav/>
          <Routes>
            <Route path="/client/*" element={<ClientApiNav />} />
            <Route path="/company/*" element={<AirlineApiNav />} />
            <Route path="/admin/*" element={<AdminApiNav />} />

            <Route path="/flight" element={<FlightData />} />
            <Route path="/flight/id" element={<FlightDataId />} />
            <Route path="/flight/params" element={<FlightDataParams />} />
            <Route path="/airline" element={<AirlineData />} />
            <Route path="/airline/id" element={<AirlineDataId />} />
            <Route path="/airline/params" element={<AirlineDataParams />} />
            <Route path="/country" element={<CountryData />} />
            <Route path="/country/id" element={<CountryDataId />} />
          </Routes>

          <Routes>
            <Route path="/client/customer/update" element={<CustomerUpdate />} />
            <Route path="/client/ticket/add" element={<TicketAdd />} />
            <Route path="/client/ticket/delete" element={<TicketDelete />} />
            <Route path="/client/ticket" element={<TicketData />} />

            <Route path="/company/airline/update" element={<AirlineUpdate/>} />
            <Route path="/company/flight/add" element={<FlightAdd/>} />
            <Route path="/company/flight/update" element={<FlightUpdate/>} />
            <Route path="/company/flight/delete" element={<FlightDelete/>} />

            <Route path="/admin/customer" element={<CustomersData />} />
            <Route path="/admin/airline/add" element={<AirlineAdd />} />
            <Route path="/admin/customer/add" element={<CustomerAdd />} />
            <Route path="/admin/admin/add" element={<AdminAdd />} />
            <Route path="/admin/airline/delete" element={<AirlineDelete />} />
            <Route path="/admin/customer/delete" element={<CustomerDelete />} />
            <Route path="/admin/admin/delete" element={<AdminDelete />} />
          </Routes>
          <br></br>
          <BackToDjango/>
      </BrowserRouter>
    </div>
  );
}

export default App;
