import axios from "axios";
import { BASE_URL } from "../config/environment";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
