package com.example.karros.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="role")
public class RoleModel {
    public enum RoleEnum {
        ADMIN(1, "ADMINISTRADOR", "Administrador"),
        USER(2,"USUARIO", "Usuário");

        public int id;
        public String code;
        public String description;
        RoleEnum(int id, String code, String description) {
            this.id = id;
            this.code = code;
            this.description = description;
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_role")
    private int id;
    @Column(name = "code")
    private String code;
    @Column(name = "description")
    private String description;

    public RoleModel(RoleEnum roleEnum){
        this.id = roleEnum.id;
        this.code = roleEnum.code;
        this.description = roleEnum.description;
    }
}
