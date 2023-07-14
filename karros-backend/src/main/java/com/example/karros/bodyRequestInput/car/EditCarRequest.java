package com.example.karros.bodyRequestInput.car;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EditCarRequest {
    private Long id;
    private String name;
    private String brand;
    private String model;
    private Integer amount;
    private Integer kilometers;
    private String year;
    private String image;
}
