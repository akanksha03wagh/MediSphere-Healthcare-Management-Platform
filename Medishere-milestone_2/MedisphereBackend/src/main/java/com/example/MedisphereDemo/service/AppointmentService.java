package com.example.MedisphereDemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MedisphereDemo.entity.Appointment;
import com.example.MedisphereDemo.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Book Appointment
    public Appointment bookAppointment(Appointment appointment) {

        appointment.setStatus("Pending");

        return appointmentRepository.save(appointment);
    }

    // View All Appointments
    public List<Appointment> getAllAppointments() {

        return appointmentRepository.findAll();
    }

}