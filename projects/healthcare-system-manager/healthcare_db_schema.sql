
CREATE DATABASE IF NOT EXISTS hospital_db;
USE hospital_db;

CREATE TABLE patients (
  patient_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  dob DATE,
  gender CHAR(1),
  insurance_provider VARCHAR(100)
);

CREATE TABLE doctors (
  doctor_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  specialty VARCHAR(100)
);

CREATE TABLE appointments (
  appointment_id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT,
  doctor_id INT,
  appointment_date DATE,
  diagnosis VARCHAR(255),
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);

CREATE TABLE procedures (
  procedure_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  description TEXT,
  cost DECIMAL(10, 2)
);

CREATE TABLE performed_procedures (
  record_id INT PRIMARY KEY AUTO_INCREMENT,
  appointment_id INT,
  procedure_id INT,
  FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
  FOREIGN KEY (procedure_id) REFERENCES procedures(procedure_id)
);
