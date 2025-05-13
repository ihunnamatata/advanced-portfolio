import streamlit as st
import pandas as pd

# Load data
patients = pd.read_csv("patients.csv")
doctors = pd.read_csv("doctors.csv")
appointments = pd.read_csv("appointments.csv")
procedures = pd.read_csv("procedures.csv")
performed_procedures = pd.read_csv("performed_procedures.csv")

# Merge data for display
merged = appointments.merge(patients, on="patient_id") \
                     .merge(doctors, on="doctor_id") \
                     .rename(columns={"name_x": "patient_name", "name_y": "doctor_name"})

# Page title
st.title("🏥 Healthcare System Manager Dashboard")

# Sidebar filters
st.sidebar.header("Filter Options")
selected_specialty = st.sidebar.selectbox("Doctor Specialty", options=["All"] + sorted(doctors["specialty"].unique()))
if selected_specialty != "All":
    merged = merged[merged["specialty"] == selected_specialty]

# Summary stats
st.subheader("Summary Statistics")
st.metric("Total Patients", patients.shape[0])
st.metric("Total Appointments", appointments.shape[0])
st.metric("Total Doctors", doctors.shape[0])

# Table of merged data
st.subheader("Appointments Overview")
st.dataframe(merged.head(100))

# Procedure breakdown
st.subheader("Procedure Analytics")
proc_count = performed_procedures["procedure_id"].value_counts().reset_index()
proc_count.columns = ["procedure_id", "count"]
proc_data = proc_count.merge(procedures, on="procedure_id")
st.bar_chart(proc_data.set_index("name")["count"])