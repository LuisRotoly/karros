import "./App.css";
import { loginRequest } from "./services/userServices";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    loginRequest("teste", "teste")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [loginRequest]);

  return (
    <div>
      <p>oi</p>
    </div>
  );
}

export default App;
