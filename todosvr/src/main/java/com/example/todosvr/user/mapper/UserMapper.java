package com.example.todosvr.user.mapper;

import org.apache.ibatis.annotations.*;
import com.example.todosvr.user.dto.UserDto;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("""
            SELECT * FROM user
            """)
    List<UserDto> findAllUsers();

    @Select("""
            SELECT * FROM user WHERE id = #{id}
            """)
    UserDto findUser(@Param("id") Long id);

    @Insert("""
            INSERT INTO user (user_id, password, name) VALUES (#{userId}, #{password}, #{name})
            """)
    void insertUser(UserDto user);

    @Select("""
            SELECT user_id FROM user WHERE user_id = #{userId} AND password = #{password}
            """)
    String findUserId(@Param("userId") String userId, @Param("password") String password);

    @Select("""
            SELECT COUNT(*) FROM user WHERE user_id = #{userId}
            """)
    int checkUserId(@Param("userId") String userId);
}