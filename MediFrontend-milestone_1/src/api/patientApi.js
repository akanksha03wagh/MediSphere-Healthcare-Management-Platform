import axios from "axios";

const BASE_URL = "http://localhost:8080/patients";

export const registerPatient = (patient) => {
  return axios.post(BASE_URL, patient);
};