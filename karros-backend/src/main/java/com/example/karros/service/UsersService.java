package com.example.karros.service;

import com.example.karros.DTO.UserDTO;
import com.example.karros.authentication.TokenUtil;
import com.example.karros.bodyRequestInput.users.CreateUserRequest;
import com.example.karros.bodyRequestInput.users.LoginRequest;
import com.example.karros.exception.ApiRequestException;
import com.example.karros.model.RoleModel;
import com.example.karros.model.UsersModel;
import com.example.karros.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public UserDTO login(LoginRequest loginRequest) {
        UsersModel usersModel = usersRepository.login(loginRequest.getEmail(), loginRequest.getPassword());
        if(usersModel == null){
            throw new ApiRequestException("E-mail ou senha incorretos!");
        }
        if(usersModel.getRoleModel().getCode().equals(RoleModel.RoleEnum.ADMIN.code)){
            String token = TokenUtil.encodeToken(usersModel.getEmail(),usersModel.getRoleModel().getCode());
            usersRepository.changeUserToken(usersModel.getId(), token);
            return new UserDTO(usersModel, token);
        }
        return new UserDTO(usersModel);
    }

    public UsersModel createUser(CreateUserRequest createUserRequest) {
        UsersModel usersModel = new UsersModel();
        if(usersRepository.userEmailExists(createUserRequest.getEmail()) != null){
            throw new ApiRequestException("E-mail já está sendo utilizado!");
        }else{
            usersModel.setName(createUserRequest.getName());
            usersModel.setEmail(createUserRequest.getEmail());
            usersModel.setPassword(createUserRequest.getPassword());
            usersModel.setCreatedAt(LocalDateTime.now());
            //criar token
            usersModel.setRoleModel(new RoleModel(RoleModel.RoleEnum.USER));
            try {
                usersRepository.save(usersModel);
            }catch (Exception e){
                throw new ApiRequestException("Erro ao tentar criar o usuário!");
            }
        }
        return usersModel;
    }
}
