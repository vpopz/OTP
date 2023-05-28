import React from 'react'

const Welcome = () => {
  return (
    <div>
    <div style={styles.container}>
    <h2 style={styles.heading}>Welcome!</h2>
    <p style={styles.message}>Thank you for using our application.</p>
    <a href="/">back to login</a>
  </div>
  </div>
);
};
const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#555',
  },
};


export default Welcome
