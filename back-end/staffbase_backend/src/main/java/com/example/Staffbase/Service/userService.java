package com.example.Staffbase.Service;

import com.example.Staffbase.Entity.user;
import com.example.Staffbase.Repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class userService {

    @Autowired
    private userRepository repository;

    public List<user> listAll() {
        return repository.findAll();
    }

    public Optional<user> getById(Long id) {
        return repository.findById(id);
    }

    public user save(user user) {
        return repository.save(user);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
