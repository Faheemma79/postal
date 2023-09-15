import React from 'react';

const body = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My React App</h1>
      <p style={paragraphStyle}>This is your home page.</p>
    </div>
  );
};

export default body;
