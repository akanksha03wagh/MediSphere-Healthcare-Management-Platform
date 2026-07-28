package com.example.MedisphereDemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.MedisphereDemo.entity.Patient;
import com.example.MedisphereDemo.service.PatientService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // Register Patient
    @PostMapping
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

    // Login Patient
    @PostMapping("/login")
    public Patient loginPatient(@RequestBody Patient patient) {

        return patientService.loginPatient(
                patient.getEmail(),
                patient.getPassword()
        );
    }

    // View All Patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    // Update Patient
    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable int id, @RequestBody Patient patient) {
        return patientService.updatePatient(id, patient);
    }

    // Delete Patient
    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable int id) {
        return patientService.deletePatient(id);
    }
}