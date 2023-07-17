package com.example.karros.DTO;

import com.example.karros.model.RoleModel;
import com.example.karros.model.UsersModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String name;
    private String email;
    private String jwtToken;
    private RoleModel roleModel;

    public UserDTO(UsersModel user, String token) {
        email = user.getEmail();
        name = user.getName();
        roleModel = new RoleModel(RoleModel.RoleEnum.ADMIN);
        jwtToken = token;
    }

    public UserDTO(UsersModel user) {
        email = user.getEmail();
        name = user.getName();
        roleModel = new RoleModel(RoleModel.RoleEnum.USER);
        jwtToken = null;
    }
}
