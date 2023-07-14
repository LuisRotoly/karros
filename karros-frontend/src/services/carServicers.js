import api from "./api";

export async function getCarListRequest() {
  return await api.get("getCarList");
}

export async function getCarRequest(carId) {
  return await api.get("getCar?id=" + carId);
}

export async function addNewCarRequest(
  carName,
  brand,
  model,
  amount,
  kilometers,
  year,
  image
) {
  return await api.post("addNewCar", {
    name: carName,
    brand: brand,
    model: model,
    amount: amount,
    kilometers: kilometers,
    year: year,
    image: image,
  });
}

export async function editCarRequest(
  id,
  carName,
  brand,
  model,
  amount,
  kilometers,
  year,
  image
) {
  return await api.post("editCar", {
    id: id,
    name: carName,
    brand: brand,
    model: model,
    amount: amount,
    kilometers: kilometers,
    year: year,
    image: image,
  });
}

export async function deleteCarRequest(id) {
  return await api.post("deleteCar?id=" + id);
}
