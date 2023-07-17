package com.example.karros.repository;

import com.example.karros.model.UsersModel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UsersRepository extends CrudRepository<UsersModel, Integer> {

    @Query(value ="SELECT u FROM UsersModel u WHERE u.email = :email AND u.password = :password")
    UsersModel login(String email, String password);

    @Query(value ="SELECT u FROM UsersModel u WHERE u.email = :email")
    UsersModel userEmailExists(String email);

    @Transactional
    @Modifying
    @Query(value = "UPDATE UsersModel u SET u.token = :token WHERE u.id = :userId")
    void changeUserToken(Long userId, String token);
}
