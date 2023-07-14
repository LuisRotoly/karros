package com.example.karros.bodyRequestInput.car;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddCarRequest {
    private String name;
    private String brand;
    private String model;
    private Integer amount;
    private Integer kilometers;
    private String year;
    private String image;
}
