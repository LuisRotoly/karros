import { useEffect, useState } from "react";
import { getAmountFormat } from "../../stringHelper";
import {
  deleteCarRequest,
  getCarListRequest,
} from "../../services/carServicers";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../../components/modal/DeleteModal";

function CarPage() {
  const navigate = useNavigate();
  const [carList, setCarList] = useState([]);
  const [modal, setModal] = useState(false);
  const [carId, setCarId] = useState("");

  useEffect(() => {
    getCarList();
  }, []);

  function getCarList() {
    getCarListRequest()
      .then((response) => setCarList(response.data))
      .catch((e) => console.log(e));
  }

  function deleteCar() {
    deleteCarRequest(carId)
      .then((_) => {
        closeModal();
        getCarList();
      })
      .catch((e) => console.log(e));
  }

  function gotoEditPage(carId) {
    navigate("/carsManage/editCar/" + carId);
  }

  function gotoCreatePage() {
    navigate("/carsManage/createCar");
  }

  function openDeleteModal(carId) {
    setCarId(carId);
    showModal();
  }

  function showModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div>
      {carList.length > 0 ? (
        <div>
          <p className="align-center p-title">
            Selecione um carro ou crie um novo anúncio
          </p>
          <div className="align-center">
            <table>
              <thead>
                <tr>
                  <td>
                    <p className="table-header">Nome</p>
                  </td>
                  <td>
                    <p className="table-header">Marca</p>
                  </td>
                  <td>
                    <p className="table-header">Modelo</p>
                  </td>
                  <td>
                    <p className="table-header">Ano</p>
                  </td>
                  <td>
                    <p className="table-header">Quilometragem</p>
                  </td>
                  <td>
                    <p className="table-header">Preço</p>
                  </td>
                  <td>
                    <p className="table-header">Editar</p>
                  </td>
                  <td>
                    <p className="table-header">Deletar</p>
                  </td>
                </tr>
              </thead>
              <tbody>
                {carList.map((car) => {
                  return (
                    <tr key={car.id}>
                      <td>
                        <p>{car.name}</p>
                      </td>
                      <td>
                        <p>{car.brand}</p>
                      </td>
                      <td>
                        <p>{car.model}</p>
                      </td>
                      <td>
                        <p>{car.year}</p>
                      </td>
                      <td>
                        <p>{car.kilometers}</p>
                      </td>
                      <td>
                        <p>{getAmountFormat(car.amount)}</p>
                      </td>
                      <td>
                        <EditIcon
                          onClick={() => gotoEditPage(car.id)}
                          className="edit-icon"
                        />
                      </td>
                      <td>
                        <DeleteIcon
                          onClick={() => openDeleteModal(car.id)}
                          className="delete-icon"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="align-center">Sem dados para mostrar</p>
      )}
      <div className="align-center">
        <button className="button-layout" onClick={gotoCreatePage}>
          Criar novo anúncio
        </button>
      </div>
      {<DeleteModal remove={deleteCar} show={modal} close={closeModal} />}
    </div>
  );
}

export default CarPage;
