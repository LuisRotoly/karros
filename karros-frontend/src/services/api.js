import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(function (config) {
  const user = localStorage.getItem("user");
  if (user != null) {
    config.headers["Authorization"] = JSON.parse(user).jwtToken;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!error.response) {
      localStorage.clear();
      window.location = "/server";
    }
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "/unauthenticated";
    }
    return Promise.reject(error);
  }
);

export default api;
