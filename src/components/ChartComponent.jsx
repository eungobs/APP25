// src/components/ChartComponent.jsx
import { useRef, useEffect, useState } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

function ChartComponent() {
  const canvasRef = useRef(null)
  const [chart, setChart] = useState(null)
  const [filter, setFilter] = useState('appointments')

  const dataSets = {
    appointments: {
      label: 'Appointments',
      data: [45, 52, 48, 61, 55, 67, 72, 58, 63, 69, 74, 78],
      backgroundColor: 'rgba(102, 126, 234, 0.1)',
      borderColor: '#667eea'
    },
    revenue: {
      label: 'Revenue (R1000s)',
      data: [25, 28, 32, 35, 31, 38, 42, 36, 39, 44, 41, 47],
      backgroundColor: 'rgba(237, 137, 54, 0.1)',
      borderColor: '#ed8936'
    },
    newPatients: {
      label: 'New Patients',
      data: [12, 15, 18, 22, 19, 25, 28, 24, 27, 31, 29, 35],
      backgroundColor: 'rgba(72, 187, 120, 0.1)',
      borderColor: '#48bb78'
    }
  }

  const labels = Array.from({ length: 12 }, (_, i) => 'Week ' + (i + 1))

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: dataSets.appointments.label,
            data: dataSets.appointments.data,
            borderColor: dataSets.appointments.borderColor,
            backgroundColor: dataSets.appointments.backgroundColor,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: dataSets.appointments.borderColor
          },
          {
            label: dataSets.newPatients.label,
            data: dataSets.newPatients.data,
            borderColor: dataSets.newPatients.borderColor,
            backgroundColor: dataSets.newPatients.backgroundColor,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: dataSets.newPatients.borderColor
          },
          {
            label: dataSets.revenue.label,
            data: dataSets.revenue.data,
            borderColor: dataSets.revenue.borderColor,
            backgroundColor: dataSets.revenue.backgroundColor,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: dataSets.revenue.borderColor
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.1)' } }
        }
      }
    })
    setChart(newChart)

    return () => {
      newChart.destroy()
    }
  }, [])

  const handleFilterChange = (f) => {
    setFilter(f)
    if (!chart) return
    chart.data.datasets.forEach(ds => ds.hidden = true)
    chart.data.datasets.forEach(ds => {
      if (f === 'appointments' && ds.label === 'Appointments') ds.hidden = false
      if (f === 'patients' && ds.label === 'New Patients') ds.hidden = false
      if (f === 'revenue' && ds.label === 'Revenue (R1000s)') ds.hidden = false
    })
    chart.update()
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <button
          onClick={() => handleFilterChange('appointments')}
          style={{
            padding: '8px 16px',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            background: filter === 'appointments' ? '#667eea' : 'white',
            color: filter === 'appointments' ? 'white' : 'black',
            cursor: 'pointer'
          }}
        >
          Appointments
        </button>
        <button
          onClick={() => handleFilterChange('revenue')}
          style={{
            padding: '8px 16px',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            background: filter === 'revenue' ? '#667eea' : 'white',
            color: filter === 'revenue' ? 'white' : 'black',
            cursor: 'pointer'
          }}
        >
          Revenue
        </button>
        <button
          onClick={() => handleFilterChange('patients')}
          style={{
            padding: '8px 16px',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            background: filter === 'patients' ? '#667eea' : 'white',
            color: filter === 'patients' ? 'white' : 'black',
            cursor: 'pointer'
          }}
        >
          New Patients
        </button>
      </div>
      <div style={{ height: '300px' }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}

export default ChartComponent