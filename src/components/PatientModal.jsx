// src/components/PatientModal.jsx
import { useState } from 'react'

function PatientModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    cellPhone: '',
    email: '',
    paymentMethod: '',
    medicalAidDetails: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const age = calculateAge(formData.dateOfBirth)
    const newPatient = {
      id: Date.now(),
      ...formData,
      age,
      status: 'Active',
      registrationDate: new Date().toISOString().split('T')[0]
    }
    onAdd(newPatient)
  }

  const calculateAge = (dob) => {
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '32px',
        maxWidth: '500px',
        width: '90%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#2d3748' }}>Add New Patient</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#718096' }}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name *</label>
            <input style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} type="text" name="fullName" required onChange={handleChange} />
          </div>
          {/* Other input fields similar to your HTML form */}
          {/* Date of Birth */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Date of Birth *</label>
            <input style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} type="date" name="dateOfBirth" required onChange={handleChange} />
          </div>
          {/* Gender */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Gender *</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} name="gender" required onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Cell Phone */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Cell Phone *</label>
            <input style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} type="tel" name="cellPhone" required onChange={handleChange} />
          </div>
          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
            <input style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} type="email" name="email" onChange={handleChange} />
          </div>
          {/* Payment Method */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Payment Method *</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} name="paymentMethod" required onChange={handleChange}>
              <option value="">Select Payment Method</option>
              <option value="Medical Aid">Medical Aid</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Insurance">Insurance</option>
            </select>
          </div>
          {/* Medical Aid Details */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Medical Aid Details (if applicable)</label>
            <input style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} type="text" name="medicalAidDetails" placeholder="Medical aid name and number" onChange={handleChange} />
          </div>
          {/* Submit Button */}
          <button type="submit" style={{ width: '100%', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '16px', fontWeight: '500', cursor: 'pointer' }}>Add Patient</button>
        </form>
      </div>
    </div>
  )
}

export default PatientModal