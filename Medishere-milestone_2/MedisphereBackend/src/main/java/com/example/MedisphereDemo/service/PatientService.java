package com.example.MedisphereDemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MedisphereDemo.entity.Patient;
import com.example.MedisphereDemo.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // Register Patient
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // View All Patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Login
    public Patient loginPatient(String email, String password) {
        return patientRepository.findByEmailAndPassword(email, password);
    }

    // Update Patient
    public Patient updatePatient(int id, Patient patient) {

        Patient existingPatient = patientRepository.findById(id).orElse(null);

        if (existingPatient != null) {

            existingPatient.setName(patient.getName());
            existingPatient.setAge(patient.getAge());
            existingPatient.setGender(patient.getGender());
            existingPatient.setEmail(patient.getEmail());
            existingPatient.setMobile(patient.getMobile());
            existingPatient.setPassword(patient.getPassword());

            return patientRepository.save(existingPatient);
        }

        return null;
    }

    // Delete Patient
    public String deletePatient(int id) {

        patientRepository.deleteById(id);

        return "Patient Deleted Successfully";
    }
}