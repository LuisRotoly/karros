package com.example.karros.repository;

import com.example.karros.model.UsersModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<UsersModel, Integer> {

    @Query(value ="SELECT u FROM UsersModel u")
    UsersModel login();
}
