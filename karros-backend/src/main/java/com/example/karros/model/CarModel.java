package com.example.karros.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="car")
public class CarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_car")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="brand")
    private String brand;

    @Column(name="model")
    private String model;

    @Column(name="amount")
    private Integer amount;

    @Column(name="kilometers")
    private Integer kilometers;

    @Column(name="year")
    private String year;

    @Column(name="base_64_image")
    private String base_64_image;

    @Column(name="created_at")
    private LocalDateTime createdAt;

    @Column(name="updated_at")
    private LocalDateTime updatedAt;
}
