package com.example.todosvr.user.service;

import com.example.todosvr.user.dto.UserDto;
import com.example.todosvr.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<UserDto> getAllUsers() {
        return userMapper.findAllUsers();
    }

    @Override
    public UserDto getUserById(Long id) {
        return userMapper.findUser(id);
    }

    @Override
    public void registerUser(UserDto user) {
        userMapper.insertUser(user);
    }

    @Override
    public boolean login(UserDto user) {
        return userMapper.findUserId(user.getUserId(), user.getPassword()) != null;
    }

    @Override
    public boolean isUserIdTaken(String userId) {
        return userMapper.checkUserId(userId) > 0;
    }
}