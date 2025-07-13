import React from 'react';

function Settings() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Settings</h2>
      <p>This is the Settings page. Configure your clinic, user preferences, notifications, and more.</p>
      
      {/* Example: Settings form */}
      <form style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Clinic Name:</label><br />
          <input type="text" placeholder="Enter clinic name" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Notification Email:</label><br />
          <input type="email" placeholder="Enter email" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;