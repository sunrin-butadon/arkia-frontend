
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000';

export const instance = axios.create({
  baseURL: `${baseURL}`,
  timeout: 10000,
});
