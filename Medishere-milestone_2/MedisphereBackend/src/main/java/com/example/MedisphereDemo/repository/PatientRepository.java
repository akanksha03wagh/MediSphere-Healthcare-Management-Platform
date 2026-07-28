package com.example.MedisphereDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.MedisphereDemo.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

    Patient findByEmailAndPassword(String email, String password);

}