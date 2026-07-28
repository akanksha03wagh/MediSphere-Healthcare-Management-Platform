package com.example.MedisphereDemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.MedisphereDemo.entity.Appointment;
import com.example.MedisphereDemo.service.AppointmentService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    // Book Appointment
    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {

        return appointmentService.bookAppointment(appointment);
    }

    // View All Appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {

        return appointmentService.getAllAppointments();
    }

}