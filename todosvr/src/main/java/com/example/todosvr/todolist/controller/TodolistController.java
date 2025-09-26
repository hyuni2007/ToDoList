package com.example.todosvr.todolist.controller;

import com.example.todosvr.todolist.dto.TodolistDto;
import com.example.todosvr.todolist.service.TodolistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todolist")
@CrossOrigin(origins = "http://localhost:5173")
public class TodolistController {

    @Autowired
    private TodolistService todolistService;

    @GetMapping
    public List<TodolistDto> findAllTodolist() {
        return todolistService.getAllTodolist();
    }

    @GetMapping("/{id}")
    public TodolistDto findTodolist(@PathVariable("id") Long id) {
        return todolistService.getTodolistById(id);
    }
    @PostMapping
    public TodolistDto insertTodolist(@RequestBody TodolistDto todolist) {
        todolistService.addTodolist(todolist);
        return todolist;
    }

    @PutMapping
    public void updateTodolist(TodolistDto todolist) {
        todolistService.modifyTodolist(todolist);
    }

    @DeleteMapping
    public void deleteTodolist(TodolistDto todolist) {
        todolistService.removeTodolist(todolist);
    }
}
