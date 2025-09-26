package com.example.todosvr.todolist.service;

import com.example.todosvr.todolist.dto.TodolistDto;
import com.example.todosvr.todolist.mapper.TodolistMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodolistServiceImpl implements TodolistService{

    @Autowired
    private TodolistMapper todolistMapper;

    @Override
    public List<TodolistDto> getAllTodolist() {
        return todolistMapper.findAllTodolist();
    }

    @Override
    public TodolistDto getTodolistById(Long id) {
        return todolistMapper.findTodolist(id);
    }

    @Override
    public void addTodolist(TodolistDto todolist) {
        todolistMapper.insertTodolist(todolist);
    }

    @Override
    public void modifyTodolist(TodolistDto todolist) {
        todolistMapper.updateTodolist(todolist);
    }

    @Override
    public void removeTodolist(TodolistDto todolist) {
        todolistMapper.deleteTodolist(todolist);
    }
}
