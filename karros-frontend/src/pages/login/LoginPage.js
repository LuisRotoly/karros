import { useState } from "react";
import { loginRequest, createUserRequest } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { validateRegexEmail, isEmpty } from "../../stringHelper";
import "./login.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [createErrorMessage, setCreateErrorMessage] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNewEmailChange(event) {
    setNewEmail(event.target.value);
  }

  function handleNewPasswordChange(event) {
    setNewPassword(event.target.value);
  }

  function validateCredentials() {
    return !isEmpty(email) || !isEmpty(password) || validateRegexEmail(email);
  }

  function validateNewCredentials() {
    return (
      !isEmpty(name) ||
      !isEmpty(newEmail) ||
      !isEmpty(newPassword) ||
      validateRegexEmail(newEmail)
    );
  }

  function login() {
    if (validateCredentials()) {
      loginRequest(email, password)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.dispatchEvent(new Event("storage"));
          navigate("/");
        })
        .catch((e) => {
          setLoginErrorMessage(e.response.data.message);
        });
    } else {
      setLoginErrorMessage("Insira um e-mail e uma senha válidos!");
    }
  }

  function createAccount() {
    if (validateNewCredentials()) {
      console.log(name, newEmail, newPassword);
      createUserRequest(name, newEmail, newPassword)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.dispatchEvent(new Event("storage"));
          navigate("/");
        })
        .catch((e) => setCreateErrorMessage(e.response.data.message));
    } else {
      setCreateErrorMessage("Insira um nome, um e-mail e uma senha válidos!");
    }
  }

  return (
    <div>
      <div className="login-block">
        <div className="login-margin">
          <p className="login-title">Já tem uma conta?</p>
          <p className="login-label">E-mail</p>
          <input type="text" value={email} onChange={handleEmailChange} />

          <p className="login-label">Senha</p>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="align-center">
            <button className="login-button" onClick={login}>
              Entrar
            </button>
          </div>
          <p className="error-message">{loginErrorMessage}</p>
        </div>
        <div className="divider" />
        <div className="login-margin">
          <p className="login-title">Crie a sua conta</p>
          <p className="login-label">Nome</p>
          <input type="text" value={name} onChange={handleNameChange} />

          <p className="login-label">E-mail</p>
          <input type="text" value={newEmail} onChange={handleNewEmailChange} />
          <p className="login-label">Senha</p>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <div className="align-center">
            <button className="login-button" onClick={createAccount}>
              Criar
            </button>
          </div>
          <p className="error-message">{createErrorMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
