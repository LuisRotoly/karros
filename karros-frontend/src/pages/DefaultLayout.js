import { Outlet } from "react-router-dom";
import Topbar from "../components/bar/topbar";

function DefaultLayout() {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
