import React, { useState } from 'react';
import axios from 'axios';

function AdminAdd() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userId, setUserId] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://127.0.0.1:8000/api/add_admin/', {
          first_name: firstName,
          last_name: lastName,
          user_id: userId,
        });
        alert('Administrator added successfully!');
        setFirstName('');
        setLastName('');
        setUserId('');
      } catch (error) {
        console.error(error);
        alert('Failed to add Administrator');
      }
    }
  
    return (
      <div>
        <h2>Add Administrator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Administrator First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label>Administrator Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label>Administrator User ID:</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <button type="submit">Add Administrator</button>
        </form>
      </div>
    );
  }
  

export default AdminAdd;