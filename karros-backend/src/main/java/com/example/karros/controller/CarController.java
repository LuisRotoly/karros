package com.example.karros.controller;

import com.example.karros.bodyRequestInput.car.AddCarRequest;
import com.example.karros.bodyRequestInput.car.EditCarRequest;
import com.example.karros.model.CarModel;
import com.example.karros.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CarController {

    @Autowired
    private CarService carService;

    @RequestMapping(value="/getCarList", method = RequestMethod.GET)
    public @ResponseBody List<CarModel> getCarList(){
        return carService.getCarList();
    }

    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
    @RequestMapping(value="/getCar", method = RequestMethod.GET)
    public @ResponseBody CarModel getCar(@RequestParam Long id){
        return carService.getCar(id);
    }

    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
    @RequestMapping(value="/addNewCar", method = RequestMethod.POST)
    public @ResponseBody void addNewCar(@RequestBody AddCarRequest addCarRequest){
        carService.addNewCar(addCarRequest);
    }

    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
    @RequestMapping(value="/editCar", method = RequestMethod.POST)
    public @ResponseBody void editCar(@RequestBody EditCarRequest editCarRequest){
        carService.editCar(editCarRequest);
    }

    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
    @RequestMapping(value="/deleteCar", method = RequestMethod.POST)
    public @ResponseBody void deleteCar(@RequestParam Long id){
        carService.deleteCar(id);
    }
}
