import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarRequest, editCarRequest } from "../../services/carServicers";
import { isEmpty } from "../../stringHelper";

function EditCarPage() {
  const pathname = useParams();
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
      !isEmpty(name) ||
      !isEmpty(brand) ||
      !isEmpty(model) ||
      !isEmpty(year) ||
      !isEmpty(kilometers) ||
      !isEmpty(amount) ||
      !isEmpty(image)
    );
  }

  function editCar() {
    if (isValidEntrances) {
      editCarRequest(
        pathname.id,
        name,
        brand,
        model,
        amount,
        kilometers,
        year,
        image
      )
        .then((_) => setSuccessMessage("Anúncio editado com sucesso!"))
        .catch((e) => setErrorMessage(e.response.data.message));
    } else {
      setErrorMessage("Preencha todos os campos corretamente!");
    }
  }

  function goBackPage() {
    navigate("/carsManage");
  }

  useEffect(() => {
    getCarRequest(pathname.id)
      .then((response) => {
        setName(response.data.name);
        setBrand(response.data.brand);
        setModel(response.data.model);
        setYear(response.data.year);
        setKilometers(response.data.kilometers);
        setAmount(response.data.amount);
        setImage(response.data.base_64_image);
      })
      .catch((e) => console.log(e));
  }, [pathname.id]);

  return (
    <div>
      {successMessage !== "" ? (
        <div>
          <p>{successMessage}</p>
          <button onClick={goBackPage}>Voltar</button>
        </div>
      ) : (
        <div>
          <p htmlFor="file">
            Selecionar Foto:
            <input
              type="file"
              name="image"
              id="file"
              accept=".jpg, .jpeg, .png"
              onChange={(event) => onImageChange(event)}
            />
            {image !== "" ? (
              <img
                width={"100px"}
                height={"100px"}
                src={`data:image;base64,${image}`}
                alt="car_image"
              />
            ) : null}
          </p>
          <p>
            Nome:
            <input type="text" value={name} onChange={handleNameChange} />
          </p>
          <p>
            Marca:
            <input type="text" value={brand} onChange={handleBrandChange} />
          </p>
          <p>
            Modelo:
            <input type="text" value={model} onChange={handleModelChange} />
          </p>
          <p>
            Ano:
            <input type="text" value={year} onChange={handleYearChange} />
          </p>
          <p>
            Quilometragem:
            <input
              type="text"
              value={kilometers}
              onChange={handleKilometersChange}
            />
          </p>
          <p>
            Valor:
            <input type="text" value={amount} onChange={handleAmountChange} />
          </p>
          <button onClick={editCar}>Editar</button>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default EditCarPage;
