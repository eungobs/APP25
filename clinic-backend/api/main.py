from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Define your patient data model
class Patient(BaseModel):
    id: int
    fullName: str
    dateOfBirth: str
    gender: str
    age: int
    cellPhone: str
    email: str
    paymentMethod: str
    medicalAidDetails: str = ''
    registrationDate: str
    status: str

# In-memory storage for demonstration (replace with DB later)
patients_db: List[Patient] = []

# API endpoint to get list of patients
@app.get("/patients")
def get_patients():
    return patients_db

# API endpoint to add a new patient
@app.post("/patients")
def add_patient(patient: Patient):
    patients_db.append(patient)
    return {"message": "Patient added successfully"}