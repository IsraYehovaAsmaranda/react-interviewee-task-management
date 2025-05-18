import axios from "axios";
import httpClient from "../lib/axios";

export const authService = {
  login: async (request) => {
    const { data } = await httpClient.post("/auth/login", request);
    return data;
  },
  refreshToken: async (accessToken) => {
    const { data } = await axios.post(
      "/auth/refresh-token",
      {},
      {
        withCredentials: true,
        baseURL: "/api",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      },
    );
    return data;
  },
  logout: async () => {
    const { data } = await httpClient.post("/auth/logout");
    return data;
  },
};
