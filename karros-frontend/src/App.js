import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./pages/DefaultLayout";
import CarPage from "./pages/carManage/CarPage";
import Authentication from "./pages/Authentication";
import EditCarPage from "./pages/carManage/EditCarPage";
import CreateCarPage from "./pages/carManage/CreateCarPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route element={<Authentication />}>
            <Route path="/carsManage" element={<CarPage />} />
            <Route path="/carsManage/editCar/:id" element={<EditCarPage />} />
            <Route path="/carsManage/createCar" element={<CreateCarPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
