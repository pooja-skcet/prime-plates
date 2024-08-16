package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow cross-origin requests from specified origin
@RequestMapping("/api/users") // Base URL for all user-related endpoints
public class UserController {

    @Autowired
    private UserService userService; // Injecting the UserService bean

    // Create a new user
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.createUser(userDTO)); // Return created user
    }

    // Get user by ID
    @GetMapping("/{userId}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserById(userId)); // Return user by ID
    }

    // Get all users
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers()); // Return list of all users
    }
    
    // Update user by ID
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO usersDTO) {
        return ResponseEntity.ok(userService.updateUser(id, usersDTO)); // Return updated user
    }

    // Delete user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id); // Delete user and return no content
        return ResponseEntity.noContent().build();
    }
}
