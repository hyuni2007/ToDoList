package com.example.todosvr.user.controller;

import com.example.todosvr.user.dto.UserDto;
import com.example.todosvr.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/sign")
    public void registerUser(@RequestBody UserDto user) {
        userService.registerUser(user);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody UserDto user) {
        return userService.login(user);
    }

    @GetMapping("/check/{userId}")
    public boolean checkUserId(@PathVariable String userId) {
        return userService.isUserIdTaken(userId);
    }
}