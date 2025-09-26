package com.example.todosvr.todolist.service;

import com.example.todosvr.todolist.dto.TodolistDto;

import java.util.List;

public interface TodolistService {
    List<TodolistDto> getAllTodolist();
    TodolistDto getTodolistById(Long id);
    void addTodolist(TodolistDto todolist);
    void modifyTodolist(TodolistDto todolist);
    void removeTodolist(TodolistDto todolist);
}