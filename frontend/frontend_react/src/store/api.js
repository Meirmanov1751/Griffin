import axios from "axios";

export const BASE_URL = "http://localhost:1337/"

const instance = axios.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config
})

export default instance;
