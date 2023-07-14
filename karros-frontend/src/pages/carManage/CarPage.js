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

  useEffect(() => {
    getCarList();
  }, []);

  function getCarList() {
    getCarListRequest()
      .then((response) => setCarList(response.data))
      .catch((e) => console.log(e));
  }

  function deleteCar(carId) {
    deleteCarRequest(carId)
      .then((_) => getCarList())
      .catch((e) => console.log(e));
  }

  function gotoEditPage(carId) {
    navigate("/carsManage/editCar/" + carId);
  }

  function gotoCreatePage() {
    navigate("/carsManage/createCar");
  }

  return (
    <div>
      <p>Selecione um carro ou crie um novo anúncio</p>
      <table>
        <thead>
          <tr>
            <td>
              <p>Nome</p>
            </td>
            <td>
              <p>Marca</p>
            </td>
            <td>
              <p>Modelo</p>
            </td>
            <td>
              <p>Ano</p>
            </td>
            <td>
              <p>Quilometragem</p>
            </td>
            <td>
              <p>Preço</p>
            </td>
            <td>
              <p>Editar</p>
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
                    className="edit-icon-color"
                  />
                </td>
                <td>
                  <DeleteIcon
                    onClick={() => deleteCar(car.id)}
                    className="delete-icon-color"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*<DeleteModal
        remove={this.handleDelete}
        show={this.state.modal}
        close={this.closeModal}
        objectName={this.state.readingName}
        title="material educativo"
        />*/}
      <button onClick={gotoCreatePage}>Criar novo anúncio</button>
    </div>
  );
}

export default CarPage;
