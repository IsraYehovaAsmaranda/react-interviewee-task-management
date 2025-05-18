import axios from "axios";
import { authService } from "../services/authService";

const httpClient = axios.create({
  baseURL: "/api",
  timeout: 20000,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      try {
        const token = localStorage.getItem("token");

        const { data } = await authService.refreshToken(token);

        localStorage.setItem("token", data.token);

        return httpClient.request(error.config);
      } catch (error) {
        await authService.logout();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default httpClient;
