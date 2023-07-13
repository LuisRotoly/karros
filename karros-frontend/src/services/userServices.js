import api from "./api";

export async function loginRequest(email, password) {
  return await api.post("login", { email: email, password: password });
}
