package com.example.karros.service;

import com.example.karros.bodyRequestInput.car.AddCarRequest;
import com.example.karros.bodyRequestInput.car.EditCarRequest;
import com.example.karros.exception.ApiRequestException;
import com.example.karros.model.CarModel;
import com.example.karros.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public List<CarModel> getCarList() {
        return carRepository.getCarOrderedByAmount();
    }

    public void addNewCar(AddCarRequest addCarRequest) {
        CarModel carModel = new CarModel();
        carModel.setName(addCarRequest.getName());
        carModel.setModel(addCarRequest.getModel());
        carModel.setBrand(addCarRequest.getBrand());
        carModel.setAmount(addCarRequest.getAmount());
        carModel.setYear(addCarRequest.getYear());
        carModel.setKilometers(addCarRequest.getKilometers());
        carModel.setBase_64_image(addCarRequest.getImage());
        carModel.setCreatedAt(LocalDateTime.now());
        carModel.setIsDeleted(false);
        try {
            carRepository.save(carModel);
        }catch (Exception e){
            throw new ApiRequestException("Erro ao cadastrar novo carro!");
        }
    }

    public void editCar(EditCarRequest editCarRequest) {
        try {
            carRepository.editCar(editCarRequest.getId(),editCarRequest.getName(),editCarRequest.getBrand(),editCarRequest.getModel(),editCarRequest.getYear(),editCarRequest.getKilometers(),editCarRequest.getAmount(),editCarRequest.getImage(),LocalDateTime.now());
        }catch (Exception e){
            throw new ApiRequestException("Erro ao editar carro!");
        }
    }

    public void deleteCar(Long id) {
        try {
            carRepository.setDeletedFlagTrue(id, LocalDateTime.now());
        }catch (Exception e){
            throw new ApiRequestException("Erro ao deletar carro!");
        }
    }

    public CarModel getCar(Long id) {
        try {
            return carRepository.findById(Math.toIntExact(id)).get();
        }catch (Exception e){
            throw new ApiRequestException("Não foi possível encontrar o carro selecionado!");
        }
    }
}
