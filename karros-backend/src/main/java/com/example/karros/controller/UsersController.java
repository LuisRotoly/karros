package com.example.karros.controller;

import com.example.karros.bodyRequestInput.users.LoginRequest;
import com.example.karros.model.UsersModel;
import com.example.karros.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class UsersController {

    @Autowired
    private UsersService usersService;

    @RequestMapping(value="/login", method = RequestMethod.POST)
    public @ResponseBody UsersModel login(@RequestBody LoginRequest loginRequest){
        UsersModel usersModel = usersService.login(loginRequest);
        //if(usersModel != null) {
            return usersModel;
        //}
        //throw new ApiRequestException("E-mail e senha não encontrados!");
    }
}
