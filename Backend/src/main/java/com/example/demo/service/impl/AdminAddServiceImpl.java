package com.example.demo.service.impl;

import com.example.demo.entity.AdminAdd;
import com.example.demo.repository.AdminAddRepository;
import com.example.demo.service.AdminAddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminAddServiceImpl implements AdminAddService {

    @Autowired
    private AdminAddRepository adminAddRepository;

    @Override
    public AdminAdd addMenuItem(AdminAdd adminAdd) {
        // Save the AdminAdd entity in the database
        return adminAddRepository.save(adminAdd);
    }
}
