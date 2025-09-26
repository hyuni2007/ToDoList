package com.example.todosvr.user.service;

import com.example.todosvr.user.dto.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> getAllUsers();
    UserDto getUserById(Long id);
    void registerUser(UserDto user);
    boolean login(UserDto user);
    boolean isUserIdTaken(String userId);
}