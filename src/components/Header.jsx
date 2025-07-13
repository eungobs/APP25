// src/components/Header.jsx
function Header({ currentSection }) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#2d3748' }}>{currentSection === 'dashboard' ? 'Dashboard' : currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'white',
          borderRadius: '25px',
          padding: '8px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '300px'
        }}>
          <input type="text" placeholder="Search patients, appointments..." style={{ border: 'none', outline: 'none', flex: 1, padding: '8px', fontSize: '14px' }} />
          <span style={{ color: '#a0aec0', marginLeft: '8px' }}>🔍</span>
        </div>
        {/* Notifications */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            position: 'relative', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', cursor: 'pointer'
          }}>
            <span>🔔</span>
            <div style={{
              position: 'absolute', top: '-5px', right: '-5px', background: '#e53e3e', color: 'white', borderRadius: '50%', width: '18px', height: '18px',
              fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>3</div>
          </button>
          <button style={{
            position: 'relative', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', cursor: 'pointer'
          }}>
            <span>💬</span>
            <div style={{
              position: 'absolute', top: '-5px', right: '-5px', background: '#e53e3e', color: 'white', borderRadius: '50%', width: '18px', height: '18px',
              fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>7</div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header