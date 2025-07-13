// src/App.jsx
import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import Patients from './components/Patients.jsx';
import Appointments from './components/Appointments.jsx';
import Billing from './components/Billing.jsx';
import Reports from './components/Reports.jsx';
import Settings from './components/Settings.jsx';
import './App.css';

function App() {
  const [section, setSection] = useState('dashboard');

  const handleSectionChange = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div className="dashboard" style={{ display: 'flex' }}>
      <Sidebar onNavigate={handleSectionChange} activeSection={section} />
      <div style={{ flex: 1, marginLeft: '280px', padding: '20px' }}>
        <Header currentSection={section} />
        {section === 'dashboard' && <Dashboard />}
        {section === 'patients' && <Patients />}
        {section === 'appointments' && <Appointments />}
        {section === 'billing' && <Billing />}
        {section === 'reports' && <Reports />}
        {section === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default App;