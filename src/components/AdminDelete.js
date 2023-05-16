import React, { useState } from 'react';
import axios from 'axios';

function AdminDelete() {
  const [adminId, setAdminId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  function handleAdminIdChange(event) {
    setAdminId(event.target.value);
  }

  async function handleDeleteAdmin(event) {
    event.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_admin/${adminId}/`);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to delete Admin');
    }
  }

  return (
    <div>
      <h2>Delete Administrator</h2>
      <form onSubmit={handleDeleteAdmin}>
        <div>
          <label>Administrator ID:</label>
          <input type="text" value={adminId} onChange={handleAdminIdChange} />
          <button type="submit">Delete Administrator</button>
        </div>
      </form>
      {isDeleted && <p>Administrator deleted successfully!</p>}
    </div>
  );
}

export default AdminDelete;