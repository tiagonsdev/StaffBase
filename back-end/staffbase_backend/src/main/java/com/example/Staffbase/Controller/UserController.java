package com.example.Staffbase.Controller;

import com.example.Staffbase.Entity.user;
import com.example.Staffbase.Service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private userService service;

    @GetMapping
    public List<user> list() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public user get(@PathVariable Long id) {
        return service.getById(id).orElseThrow();
    }

    @PostMapping
    public user create(@RequestBody user user) {
        return service.save(user);
    }

    @PutMapping("/{id}")
    public user update(@PathVariable Long id, @RequestBody user user) {
        user.setId(id);
        return service.save(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
