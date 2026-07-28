import axios from "axios";

const API_URL = "http://localhost:8080/appointments";

export const bookAppointment = (appointment) => {
    return axios.post(API_URL, appointment);
};

export const getAllAppointments = () => {
    return axios.get(API_URL);
};