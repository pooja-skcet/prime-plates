package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import java.util.List;

public interface UserService {

    // Create a new user with the provided UserDTO
    UserDTO createUser(UserDTO userDTO);

    // Retrieve a user by their ID
    UserDTO getUserById(Long userId);

    // Retrieve a list of all users
    List<UserDTO> getAllUsers();

    // Update an existing user with the provided UserDTO
    UserDTO updateUser(Long userId, UserDTO usersDTO);

    // Delete a user by their ID
    void deleteUser(Long userId);
}
