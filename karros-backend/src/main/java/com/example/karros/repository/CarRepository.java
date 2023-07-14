package com.example.karros.repository;

import com.example.karros.model.CarModel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface CarRepository extends CrudRepository<CarModel,Integer> {

    @Query(value = "SELECT c FROM CarModel c ORDER BY c.amount")
    List<CarModel> getCarOrderedByAmount();

    @Transactional
    @Modifying
    @Query(value = "UPDATE CarModel c SET c.name = :name, c.brand = :brand, c.model = :model, c.year = :year, c.kilometers = :kilometers, c.amount = :amount, c.base_64_image = :image, c.updatedAt = :updatedAt WHERE c.id = :id")
    void editCar(Long id, String name, String brand, String model, String year, Integer kilometers, Integer amount, String image, LocalDateTime updatedAt);
}
