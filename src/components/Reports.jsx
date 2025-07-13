import React from 'react';

function Reports() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Reports</h2>
      <p>This is the Reports page. View summaries, analytics, and detailed reports for your clinic.</p>
      
      {/* Example: Placeholder for report charts or data */}
      <div style={{
        height: '200px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px'
      }}>
        <p>Report Charts / Data Visualization placeholder</p>
      </div>
    </div>
  );
}

export default Reports;