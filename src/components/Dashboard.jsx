"use client"

import { useState, useEffect } from "react"

// All styles as CSS-in-JS objects
const styles = {
  dashboard: {
    padding: "1rem",
    width: "100%",
    minHeight: "100vh",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    boxSizing: "border-box",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
    width: "100%",
  },

  statCard: {
    background: "white",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },

  statHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },

  statLabel: {
    fontSize: "0.875rem",
    color: "#718096",
    fontWeight: "500",
  },

  statIcon: {
    width: "2.5rem",
    height: "2.5rem",
    background: "#667eea",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
  },

  statValue: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "0.5rem",
  },

  statChange: {
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontWeight: "500",
  },

  chartSection: {
    background: "white",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    marginBottom: "2rem",
    width: "100%",
    boxSizing: "border-box",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "1rem",
  },

  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#2d3748",
    margin: "0",
  },

  mainContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "2rem",
    width: "100%",
  },

  patientsSection: {
    background: "white",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },

  activitiesSection: {
    background: "white",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },

  addButton: {
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
    whiteSpace: "nowrap",
  },

  patientsList: {
    display: "flex",
    flexDirection: "column",
  },

  patientItem: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    borderBottom: "1px solid #f7fafc",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    borderRadius: "0.5rem",
    marginBottom: "0.25rem",
  },

  patientAvatar: {
    width: "3rem",
    height: "3rem",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "600",
    fontSize: "1.125rem",
    flexShrink: "0",
  },

  patientInfo: {
    marginLeft: "0.75rem",
    flexGrow: "1",
    minWidth: "0",
  },

  patientName: {
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "0.25rem",
  },

  patientDetails: {
    fontSize: "0.75rem",
    color: "#718096",
  },

  patientStatus: {
    marginLeft: "auto",
    flexShrink: "0",
  },

  statusBadge: {
    padding: "0.25rem 0.5rem",
    borderRadius: "0.75rem",
    fontSize: "0.625rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  activitiesList: {
    display: "flex",
    flexDirection: "column",
  },

  activityItem: {
    display: "flex",
    alignItems: "flex-start",
    padding: "0.75rem 0",
    borderBottom: "1px solid #f7fafc",
  },

  activityIcon: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.75rem",
    flexShrink: "0",
    fontSize: "0.875rem",
  },

  activityContent: {
    flexGrow: "1",
  },

  activityText: {
    fontSize: "0.875rem",
    color: "#2d3748",
    marginBottom: "0.125rem",
  },

  activityTime: {
    fontSize: "0.75rem",
    color: "#718096",
  },

  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
    padding: "1rem",
  },

  modalContent: {
    background: "white",
    borderRadius: "1rem",
    width: "100%",
    maxWidth: "500px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
  },

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 1.5rem 0",
    marginBottom: "1rem",
  },

  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#718096",
    padding: "0.25rem",
    borderRadius: "0.25rem",
    transition: "background-color 0.2s ease",
  },

  patientForm: {
    padding: "0 1.5rem 1.5rem",
  },

  formGroup: {
    marginBottom: "1rem",
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },

  formLabel: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "500",
    color: "#2d3748",
    fontSize: "0.875rem",
  },

  formInput: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
  },

  formActions: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
    justifyContent: "flex-end",
  },

  cancelButton: {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    background: "#f7fafc",
    color: "#4a5568",
  },

  submitButton: {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    background: "#667eea",
    color: "white",
  },

  // Chart styles
  chartComponent: {
    width: "100%",
  },

  chartFilters: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
  },

  filterButton: {
    padding: "0.5rem 1rem",
    border: "1px solid #e2e8f0",
    background: "white",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
    color: "#4a5568",
  },

  chartContainer: {
    display: "flex",
    height: "300px",
    gap: "1rem",
  },

  chartYAxis: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "3rem",
    paddingBottom: "2rem",
  },

  yAxisLabel: {
    fontSize: "0.75rem",
    color: "#718096",
    textAlign: "right",
  },

  chartArea: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },

  chartBars: {
    flex: "1",
    display: "flex",
    alignItems: "end",
    gap: "0.25rem",
    padding: "0.5rem 0",
  },

  barContainer: {
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "end",
  },

  chartBar: {
    width: "100%",
    minHeight: "4px",
    borderRadius: "0.25rem 0.25rem 0 0",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },

  chartXAxis: {
    display: "flex",
    gap: "0.25rem",
    marginTop: "0.5rem",
  },

  xAxisLabel: {
    flex: "1",
    fontSize: "0.75rem",
    color: "#718096",
    textAlign: "center",
  },
}

// Responsive styles
const getResponsiveStyles = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768
  const isSmallMobile = typeof window !== "undefined" && window.innerWidth <= 480

  if (isSmallMobile) {
    return {
      statsGrid: {
        ...styles.statsGrid,
        gridTemplateColumns: "1fr",
        gap: "0.5rem",
      },
      mainContent: {
        ...styles.mainContent,
        gridTemplateColumns: "1fr",
        gap: "1rem",
      },
      statCard: {
        ...styles.statCard,
        padding: "0.75rem",
      },
      statValue: {
        ...styles.statValue,
        fontSize: "1.25rem",
      },
      formRow: {
        ...styles.formRow,
        gridTemplateColumns: "1fr",
      },
    }
  }

  if (isMobile) {
    return {
      statsGrid: {
        ...styles.statsGrid,
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "0.75rem",
      },
      mainContent: {
        ...styles.mainContent,
        gridTemplateColumns: "1fr",
        gap: "1.5rem",
      },
      statCard: {
        ...styles.statCard,
        padding: "1rem",
      },
      statValue: {
        ...styles.statValue,
        fontSize: "1.5rem",
      },
    }
  }

  return styles
}

// Chart Component
function ChartComponent() {
  const [activeFilter, setActiveFilter] = useState("3months")
  const responsiveStyles = getResponsiveStyles()

  const filters = [
    { id: "1month", label: "1 Month" },
    { id: "3months", label: "3 Months" },
    { id: "6months", label: "6 Months" },
    { id: "1year", label: "1 Year" },
  ]

  const chartData = {
    "1month": [65, 78, 82, 95],
    "3months": [45, 62, 78, 85, 92, 88, 95, 102, 98, 105, 112, 108],
    "6months": [30, 45, 62, 78, 85, 92, 88, 95, 102, 98, 105, 112, 108, 115, 122, 118, 125, 132],
    "1year": [
      20, 30, 45, 62, 78, 85, 92, 88, 95, 102, 98, 105, 112, 108, 115, 122, 118, 125, 132, 128, 135, 142, 138, 145,
    ],
  }

  const currentData = chartData[activeFilter]
  const maxValue = Math.max(...currentData)

  return (
    <div style={responsiveStyles.chartComponent}>
      <div style={responsiveStyles.chartFilters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            style={{
              ...responsiveStyles.filterButton,
              ...(activeFilter === filter.id
                ? {
                    background: "#667eea",
                    borderColor: "#667eea",
                    color: "white",
                  }
                : {}),
            }}
            onClick={() => setActiveFilter(filter.id)}
            onMouseEnter={(e) => {
              if (activeFilter !== filter.id) {
                e.target.style.borderColor = "#667eea"
                e.target.style.color = "#667eea"
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter.id) {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.color = "#4a5568"
              }
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div style={responsiveStyles.chartContainer}>
        <div style={responsiveStyles.chartYAxis}>
          {[maxValue, Math.floor(maxValue * 0.75), Math.floor(maxValue * 0.5), Math.floor(maxValue * 0.25), 0].map(
            (value) => (
              <div key={value} style={responsiveStyles.yAxisLabel}>
                {value}
              </div>
            ),
          )}
        </div>

        <div style={responsiveStyles.chartArea}>
          <div style={responsiveStyles.chartBars}>
            {currentData.map((value, index) => (
              <div key={index} style={responsiveStyles.barContainer}>
                <div
                  style={{
                    ...responsiveStyles.chartBar,
                    height: `${(value / maxValue) * 100}%`,
                    background: `linear-gradient(to top, #667eea, #764ba2)`,
                  }}
                  title={`Value: ${value}`}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8"
                    e.target.style.transform = "scaleY(1.05)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1"
                    e.target.style.transform = "scaleY(1)"
                  }}
                />
              </div>
            ))}
          </div>

          <div style={responsiveStyles.chartXAxis}>
            {currentData.map((_, index) => (
              <div key={index} style={responsiveStyles.xAxisLabel}>
                {activeFilter === "1month"
                  ? `Week ${index + 1}`
                  : activeFilter === "3months"
                    ? `W${index + 1}`
                    : activeFilter === "6months"
                      ? `${index + 1}`
                      : `M${index + 1}`}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Patient Modal Component
function PatientModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    cellPhone: "",
    email: "",
    paymentMethod: "Medical Aid",
  })

  const responsiveStyles = getResponsiveStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.gender || !formData.age) {
      alert("Please fill in all required fields")
      return
    }

    const newPatient = {
      id: Date.now(),
      ...formData,
      age: Number.parseInt(formData.age),
      status: "Active",
    }

    onAdd(newPatient)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div style={responsiveStyles.modalOverlay} onClick={onClose}>
      <div style={responsiveStyles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={responsiveStyles.modalHeader}>
          <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600", color: "#2d3748" }}>Add New Patient</h2>
          <button
            style={responsiveStyles.closeButton}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.target.style.background = "#f7fafc"
              e.target.style.color = "#2d3748"
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "none"
              e.target.style.color = "#718096"
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} style={responsiveStyles.patientForm}>
          <div style={responsiveStyles.formGroup}>
            <label style={responsiveStyles.formLabel} htmlFor="fullName">
              Full Name *
            </label>
            <input
              style={responsiveStyles.formInput}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea"
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div style={responsiveStyles.formRow}>
            <div style={responsiveStyles.formGroup}>
              <label style={responsiveStyles.formLabel} htmlFor="gender">
                Gender *
              </label>
              <select
                style={responsiveStyles.formInput}
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea"
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0"
                  e.target.style.boxShadow = "none"
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={responsiveStyles.formGroup}>
              <label style={responsiveStyles.formLabel} htmlFor="age">
                Age *
              </label>
              <input
                style={responsiveStyles.formInput}
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                max="120"
                required
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea"
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0"
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>
          </div>

          <div style={responsiveStyles.formGroup}>
            <label style={responsiveStyles.formLabel} htmlFor="cellPhone">
              Cell Phone
            </label>
            <input
              style={responsiveStyles.formInput}
              type="tel"
              id="cellPhone"
              name="cellPhone"
              value={formData.cellPhone}
              onChange={handleChange}
              placeholder="+27 XX XXX XXXX"
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea"
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div style={responsiveStyles.formGroup}>
            <label style={responsiveStyles.formLabel} htmlFor="email">
              Email
            </label>
            <input
              style={responsiveStyles.formInput}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea"
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div style={responsiveStyles.formGroup}>
            <label style={responsiveStyles.formLabel} htmlFor="paymentMethod">
              Payment Method
            </label>
            <select
              style={responsiveStyles.formInput}
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea"
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.boxShadow = "none"
              }}
            >
              <option value="Medical Aid">Medical Aid</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Insurance">Insurance</option>
            </select>
          </div>

          <div style={responsiveStyles.formActions}>
            <button
              type="button"
              style={responsiveStyles.cancelButton}
              onClick={onClose}
              onMouseEnter={(e) => {
                e.target.style.background = "#edf2f7"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#f7fafc"
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={responsiveStyles.submitButton}
              onMouseEnter={(e) => {
                e.target.style.background = "#5a67d8"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#667eea"
              }}
            >
              Add Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Main Dashboard Component
function Dashboard() {
  const [patients, setPatients] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const responsiveStyles = getResponsiveStyles()

  // Mock data
  useEffect(() => {
    const mockPatients = [
      {
        id: 1,
        fullName: "John Smith",
        gender: "Male",
        age: 38,
        cellPhone: "+27 82 123 4567",
        email: "john.smith@email.com",
        status: "Active",
        paymentMethod: "Medical Aid",
      },
      {
        id: 2,
        fullName: "Sarah Johnson",
        gender: "Female",
        age: 29,
        cellPhone: "+27 83 987 6543",
        email: "sarah.johnson@email.com",
        status: "Active",
        paymentMethod: "Cash",
      },
      {
        id: 3,
        fullName: "Michael Brown",
        gender: "Male",
        age: 45,
        cellPhone: "+27 84 555 1234",
        email: "michael.brown@email.com",
        status: "Inactive",
        paymentMethod: "Medical Aid",
      },
    ]
    setPatients(mockPatients)
  }, [])

  const handleAddPatient = (newPatient) => {
    setPatients([newPatient, ...patients])
  }

  const handlePatientClick = (patient) => {
    alert(
      `Patient Details:\n\nName: ${patient.fullName}\nAge: ${patient.age}\nGender: ${patient.gender}\nPhone: ${patient.cellPhone}\nEmail: ${patient.email}`,
    )
  }

  const getStatusBadgeStyle = (status) => ({
    ...responsiveStyles.statusBadge,
    ...(status === "Active"
      ? {
          background: "#c6f6d5",
          color: "#22543d",
        }
      : {
          background: "#fed7d7",
          color: "#742a2a",
        }),
  })

  const getActivityIconStyle = (type) => ({
    ...responsiveStyles.activityIcon,
    ...(type === "appointment"
      ? {
          background: "#e6fffa",
          color: "#319795",
        }
      : type === "patient"
        ? {
            background: "#fef5e7",
            color: "#d69e2e",
          }
        : type === "payment"
          ? {
              background: "#f0fff4",
              color: "#38a169",
            }
          : {
              background: "#ebf8ff",
              color: "#3182ce",
            }),
  })

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f8fafc" }}>
      <div style={responsiveStyles.dashboard}>
        {/* Stats Cards */}
        <div style={responsiveStyles.statsGrid}>
          <div
            style={responsiveStyles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
            }}
          >
            <div style={responsiveStyles.statHeader}>
              <span style={responsiveStyles.statLabel}>Today's Appointments</span>
              <div style={responsiveStyles.statIcon}>📅</div>
            </div>
            <div style={responsiveStyles.statValue}>24</div>
            <div style={{ ...responsiveStyles.statChange, color: "#38a169" }}>↗ +12% from yesterday</div>
          </div>

          <div
            style={responsiveStyles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
            }}
          >
            <div style={responsiveStyles.statHeader}>
              <span style={responsiveStyles.statLabel}>Total Patients</span>
              <div style={responsiveStyles.statIcon}>👥</div>
            </div>
            <div style={responsiveStyles.statValue}>1,247</div>
            <div style={{ ...responsiveStyles.statChange, color: "#38a169" }}>↗ +5% from last month</div>
          </div>

          <div
            style={responsiveStyles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
            }}
          >
            <div style={responsiveStyles.statHeader}>
              <span style={responsiveStyles.statLabel}>Revenue</span>
              <div style={responsiveStyles.statIcon}>💰</div>
            </div>
            <div style={responsiveStyles.statValue}>R45,230</div>
            <div style={{ ...responsiveStyles.statChange, color: "#e53e3e" }}>↘ -2% from last month</div>
          </div>

          <div
            style={responsiveStyles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
            }}
          >
            <div style={responsiveStyles.statHeader}>
              <span style={responsiveStyles.statLabel}>Pending</span>
              <div style={responsiveStyles.statIcon}>⏳</div>
            </div>
            <div style={responsiveStyles.statValue}>8</div>
            <div style={{ ...responsiveStyles.statChange, color: "#718096" }}>→ No change</div>
          </div>
        </div>

        {/* Chart Section */}
        <div style={responsiveStyles.chartSection}>
          <div style={responsiveStyles.sectionHeader}>
            <h2 style={responsiveStyles.sectionTitle}>Patient Statistics - Last 3 Months</h2>
          </div>
          <ChartComponent />
        </div>

        {/* Main Content */}
        <div style={responsiveStyles.mainContent}>
          {/* Patients List */}
          <div style={responsiveStyles.patientsSection}>
            <div style={responsiveStyles.sectionHeader}>
              <h3 style={responsiveStyles.sectionTitle}>Recent Patients</h3>
              <button
                style={responsiveStyles.addButton}
                onClick={() => setShowAddModal(true)}
                onMouseEnter={(e) => {
                  e.target.style.background = "#5a67d8"
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#667eea"
                }}
              >
                + Add Patient
              </button>
            </div>

            <div style={responsiveStyles.patientsList}>
              {patients.length === 0 ? (
                <div style={{ textAlign: "center", padding: "2rem", color: "#718096" }}>Loading patients...</div>
              ) : (
                patients.slice(0, 5).map((patient) => (
                  <div
                    key={patient.id}
                    style={responsiveStyles.patientItem}
                    onClick={() => handlePatientClick(patient)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f7fafc"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    <div style={responsiveStyles.patientAvatar}>
                      {patient.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div style={responsiveStyles.patientInfo}>
                      <div style={responsiveStyles.patientName}>{patient.fullName}</div>
                      <div style={responsiveStyles.patientDetails}>
                        {patient.gender}, {patient.age} • {patient.paymentMethod}
                      </div>
                    </div>
                    <div style={responsiveStyles.patientStatus}>
                      <span style={getStatusBadgeStyle(patient.status)}>{patient.status}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Activities */}
          <div style={responsiveStyles.activitiesSection}>
            <div style={responsiveStyles.sectionHeader}>
              <h3 style={responsiveStyles.sectionTitle}>Recent Activities</h3>
            </div>

            <div style={responsiveStyles.activitiesList}>
              <div style={responsiveStyles.activityItem}>
                <div style={getActivityIconStyle("appointment")}>📅</div>
                <div style={responsiveStyles.activityContent}>
                  <div style={responsiveStyles.activityText}>New appointment scheduled</div>
                  <div style={responsiveStyles.activityTime}>2 minutes ago</div>
                </div>
              </div>

              <div style={responsiveStyles.activityItem}>
                <div style={getActivityIconStyle("patient")}>👤</div>
                <div style={responsiveStyles.activityContent}>
                  <div style={responsiveStyles.activityText}>Patient record updated</div>
                  <div style={responsiveStyles.activityTime}>15 minutes ago</div>
                </div>
              </div>

              <div style={responsiveStyles.activityItem}>
                <div style={getActivityIconStyle("payment")}>💳</div>
                <div style={responsiveStyles.activityContent}>
                  <div style={responsiveStyles.activityText}>Payment received</div>
                  <div style={responsiveStyles.activityTime}>1 hour ago</div>
                </div>
              </div>

              <div style={responsiveStyles.activityItem}>
                <div style={getActivityIconStyle("report")}>📊</div>
                <div style={responsiveStyles.activityContent}>
                  <div style={responsiveStyles.activityText}>Monthly report generated</div>
                  <div style={responsiveStyles.activityTime}>2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Patient Modal */}
        {showAddModal && (
          <PatientModal
            onClose={() => setShowAddModal(false)}
            onAdd={(patient) => {
              handleAddPatient(patient)
              setShowAddModal(false)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Dashboard
