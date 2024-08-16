package com.example.demo.service.impl;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private ModelMapper modelMapper;

    // Create a new user with the provided UserDTO and return the created UserDTO
    @Override
    public UserDTO createUser(UserDTO usersDTO) {
        Users user = modelMapper.map(usersDTO, Users.class);
        user = usersRepository.save(user);
        return modelMapper.map(user, UserDTO.class);
    }

    // Retrieve a user by their ID and return as UserDTO
    @Override
    public UserDTO getUserById(Long userId) {
        Users user = usersRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));
        return modelMapper.map(user, UserDTO.class);
    }

    // Retrieve a list of all users and return as a list of UserDTOs
    @Override
    public List<UserDTO> getAllUsers() {
        return usersRepository.findAll().stream()
            .map(user -> modelMapper.map(user, UserDTO.class))
            .collect(Collectors.toList());
    }

    // Update an existing user with the provided UserDTO and return the updated UserDTO
    @Override
    public UserDTO updateUser(Long userId, UserDTO usersDTO) {
        Users user = usersRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));
        modelMapper.map(usersDTO, user);
        user = usersRepository.save(user);
        return modelMapper.map(user, UserDTO.class);
    }

    // Delete a user by their ID
    @Override
    public void deleteUser(Long userId) {
        usersRepository.deleteById(userId);
    }
}
