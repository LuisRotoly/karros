import api from "./api";

export async function loginRequest(email, password) {
  return await api.post("login", { email: email, password: password });
}

export async function createUserRequest(name, email, password) {
  return await api.post("createUser", {
    name: name,
    email: email,
    password: password,
  });
}
