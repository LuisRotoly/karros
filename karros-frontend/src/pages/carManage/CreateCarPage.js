import { useState } from "react";
import { addNewCarRequest } from "../../services/carServicers";
import { isEmpty } from "../../stringHelper";
import { useNavigate } from "react-router-dom";
import "./carManage.css";

function CreateCarPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function onImageChange(event) {
    let imageFile = event.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded.bind(this);
      reader.readAsBinaryString(imageFile);
    }
  }

  function handleReaderLoaded(event) {
    let binaryString = event.target.result;
    setImage(btoa(binaryString));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleBrandChange(event) {
    setBrand(event.target.value);
  }

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleKilometersChange(event) {
    setKilometers(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function isValidEntrances() {
    return (
      !isEmpty(name) &&
      !isEmpty(brand) &&
      !isEmpty(model) &&
      !isEmpty(year) &&
      !isEmpty(kilometers) &&
      !isEmpty(amount) &&
      !isEmpty(image)
    );
  }

  function createNewCar() {
    if (isValidEntrances()) {
      addNewCarRequest(name, brand, model, amount, kilometers, year, image)
        .then((_) => setSuccessMessage("Anúncio criado com sucesso!"))
        .catch((e) => setErrorMessage(e.response.data.message));
    } else {
      setErrorMessage("Preencha todos os campos corretamente!");
    }
  }

  function goBackPage() {
    navigate("/carsManage");
  }

  return (
    <div className="align-center">
      {successMessage !== "" ? (
        <div>
          <p>{successMessage}</p>
          <div className="align-center">
            <button className="button-layout" onClick={goBackPage}>
              Voltar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="image-outter-box">
            <input
              hidden
              type="file"
              name="image"
              id="file"
              accept=".jpg, .jpeg, .png"
              onChange={(event) => onImageChange(event)}
            />

            <label htmlFor="file" className="text-image-box">
              {image !== "" ? (
                <img
                  max-width={"100%"}
                  height={"300px"}
                  src={`data:image;base64,${image}`}
                  alt="car_image"
                />
              ) : (
                "Selecionar Foto"
              )}
            </label>
          </div>
          <p>Nome:</p>
          <input type="text" value={name} onChange={handleNameChange} />
          <p>Marca:</p>
          <input type="text" value={brand} onChange={handleBrandChange} />
          <p>Modelo:</p>
          <input type="text" value={model} onChange={handleModelChange} />
          <p>Ano:</p>
          <input
            maxLength="9"
            type="text"
            value={year}
            placeholder="Exemplo: 2023/2024"
            onChange={handleYearChange}
          />
          <p>Quilometragem:</p>
          <input
            type="text"
            value={kilometers}
            onChange={handleKilometersChange}
          />
          <p>Valor:</p>
          <input type="text" value={amount} onChange={handleAmountChange} />
          <div className="align-center">
            <button className="button-layout" onClick={createNewCar}>
              Criar
            </button>
          </div>
          <p className="car-error-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default CreateCarPage;
