// src/components/Sidebar.jsx
import React from 'react';

function Sidebar({ onNavigate, activeSection }) {
  const menuItems = [
    { label: '📊 Dashboard', section: 'dashboard' },
    { label: '👥 Patients', section: 'patients' },
    { label: '📅 Appointments', section: 'appointments' },
    { label: '💳 Billing', section: 'billing' },
    { label: '📈 Reports', section: 'reports' },
    { label: '⚙️ Settings', section: 'settings' },
  ];

  const handleClick = (e, section) => {
    e.preventDefault();
    onNavigate(section);
  };

  return (
    <aside
      style={{
        width: '280px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        height: '100vh',
        position: 'fixed',
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Top Header */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              fontSize: '24px',
            }}
          >
            🏥
          </div>
          Day-Clinic
        </div>

        {/* Navigation Menu */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item) => {
            const icon = item.label.split(' ')[0];
            const label = item.label.split(' ').slice(1).join(' ');
            const isActive = activeSection === item.section;
            return (
              <li key={item.section} style={{ marginBottom: '8px' }}>
                <a
                  href="#"
                  onClick={(e) => handleClick(e, item.section)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    color: isActive ? 'white' : 'rgba(255,255,255,0.8)',
                    fontWeight: isActive ? 'bold' : 'normal',
                    transition: 'background 0.2s',
                  }}
                >
                  <span style={{ marginRight: '12px', fontSize: '18px' }}>{icon}</span>
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile at bottom */}
      <div
        style={{
          position: 'relative',
          marginTop: 'auto',
          paddingTop: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            padding: '16px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              fontSize: '24px',
            }}
          >
            👨‍⚕️
          </div>
          <div style={{ fontWeight: '600' }}>Dr. Sarah Johnson</div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>Medical Director</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;