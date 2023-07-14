import { useState } from "react";
import logo from "../../images/karros_logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./topBar.css";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function isAuth() {
    return user != null;
  }

  function isAdmin() {
    return user.roleModel.code === "ADMINISTRADOR";
  }

  window.addEventListener("storage", () => {
    setUser(JSON.parse(localStorage.getItem("user")));
  });

  function logout() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  function login() {
    navigate("/login");
  }

  function gotoManageCars() {
    navigate("/carsManage");
  }

  return (
    <div className="container">
      <div className="image">
        <img width="30%" height="100%" src={logo} alt="Logo Karros" />
      </div>
      <div className="credentials">
        {isAuth() ? (
          <div>
            <span className="user-name">{user.name}</span>
            <div className="button-container">
              {isAdmin() ? (
                <button className="button" onClick={gotoManageCars}>
                  Carros
                </button>
              ) : null}
              <button className="button" onClick={logout}>
                Sair
              </button>
            </div>
          </div>
        ) : (
          <div className="login-container">
            <PersonOutlineOutlinedIcon className="icon" />
            <button className="button" onClick={login}>
              Entrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Topbar;
