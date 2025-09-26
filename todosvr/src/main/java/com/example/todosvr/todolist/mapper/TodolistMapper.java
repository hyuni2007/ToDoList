package com.example.todosvr.todolist.mapper;

import com.example.todosvr.todolist.dto.TodolistDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TodolistMapper {
    @Select("""
            SELECT * FROM todolist
            """)
    List<TodolistDto> findAllTodolist();

    @Select("""
            SELECT * FROM todolist WHERE id = #{id}
            """)
    TodolistDto findTodolist(@Param("id") Long id);

    @Insert("""
            INSERT INTO todolist (content, created_at, due_time)
            VALUES (#{content}, #{createdAt}, #{dueTime})
            """)
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insertTodolist(TodolistDto todolist);

    @Update("""
            UPDATE todolist
            SET content = #{content}
            WHERE id = #{id}
            """)
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void updateTodolist(TodolistDto todolist);

    @Delete("""
            DELETE FROM todolist
            WHERE id = #{id}
            """)
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void deleteTodolist(TodolistDto todolist);
}
