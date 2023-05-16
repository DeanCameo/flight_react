import React from 'react';

function BackToDjango() {
  const handleBackClick = () => {
    window.location.href = 'http://127.0.0.1:8000/flight/';
  };

  return (
    <div className='django'>
      <button onClick={handleBackClick} className='django'> Back To Django</button>
    </div>
  );
}

export default BackToDjango;
