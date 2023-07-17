import { useEffect, useState } from "react";
import { getCarListRequest } from "../services/carServicers";
import CarContainer from "../components/car/CarContainer";
import { getAmountFormat } from "../stringHelper";
import { useParams, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const pathname = useParams();
  const location = useLocation();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (location.pathname !== "/") {
      if (pathname.error === "server") {
        toast.error("Erro, Servidor está offline!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          toastId: "server",
        });
      }
      if (pathname.error === "unauthenticated") {
        getCarList();
        toast.error("Erro, Usuário não autenticado!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          toastId: "unauthenticated",
        });
      }
    } else {
      getCarList();
    }
  }, [pathname.error, location.pathname]);

  function getCarList() {
    getCarListRequest()
      .then((response) => setCarList(response.data))
      .catch((e) => console.log(e));
  }

  return (
    <div className="image-block">
      {carList.length > 0 ? (
        carList.map((car) => {
          return (
            <CarContainer
              key={car.id}
              name={car.name}
              brand={car.brand}
              model={car.model}
              year={car.year}
              amount={getAmountFormat(car.amount)}
              image={car.base_64_image}
              kilometers={car.kilometers}
            />
          );
        })
      ) : (
        <p>Nenhum carro disponível no momento</p>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default HomePage;
