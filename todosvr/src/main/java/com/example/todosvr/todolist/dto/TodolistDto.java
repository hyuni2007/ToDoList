package com.example.todosvr.todolist.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class TodolistDto {
    private Long id;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime dueTime;
}