import { useState } from 'react';

function Appointments() {
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Smith',
      date: '2024-05-10',
      time: '10:00 AM',
      doctor: 'Dr. Sarah Johnson',
      status: 'Confirmed'
    },
    {
      id: 2,
      patientName: 'Alice Williams',
      date: '2024-05-11',
      time: '02:00 PM',
      doctor: 'Dr. Robert Brown',
      status: 'Pending'
    },
    {
      id: 3,
      patientName: 'Michael Lee',
      date: '2024-05-12',
      time: '09:30 AM',
      doctor: 'Dr. Sarah Johnson',
      status: 'Cancelled'
    }
  ]);

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Appointments</h2>
      
      {/* Add button or filters if needed */}
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Patient Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Time</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Doctor</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} style={{ textAlign: 'center' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{appointment.patientName}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{appointment.date}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{appointment.time}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{appointment.doctor}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backgroundColor: appointment.status === 'Confirmed' ? '#c6f6d5' :
                                    appointment.status === 'Pending' ? '#fefcbf' : '#fed7d7',
                  color: appointment.status === 'Cancelled' ? '#742a2a' : '#22543d',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;