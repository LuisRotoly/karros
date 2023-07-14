import { Outlet, Navigate } from "react-router-dom";

function Authentication() {
  function isAdmin() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.roleModel.code === "ADMINISTRADOR";
  }

  return isAdmin() ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Authentication;
