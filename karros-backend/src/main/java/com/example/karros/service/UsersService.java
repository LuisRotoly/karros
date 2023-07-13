package com.example.karros.service;

import com.example.karros.bodyRequestInput.users.LoginRequest;
import com.example.karros.model.UsersModel;
import com.example.karros.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public UsersModel login(LoginRequest loginRequest) {
        return usersRepository.login();
    }
}
