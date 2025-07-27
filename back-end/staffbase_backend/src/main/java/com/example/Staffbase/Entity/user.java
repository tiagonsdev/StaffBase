package com.example.Staffbase.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
}
