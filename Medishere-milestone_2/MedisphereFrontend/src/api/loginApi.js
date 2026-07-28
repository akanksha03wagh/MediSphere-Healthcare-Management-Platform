import axios from "axios";

const BASE_URL = "http://localhost:8080/patients/login";

export const loginPatient = (loginData) => {
    return axios.post(BASE_URL, loginData);
};