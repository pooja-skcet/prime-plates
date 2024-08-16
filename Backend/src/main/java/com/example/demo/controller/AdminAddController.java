package com.example.demo.controller;

import com.example.demo.entity.AdminAdd;
import com.example.demo.service.AdminAddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin")
public class AdminAddController {

    @Autowired
    private AdminAddService adminAddService;

    // Endpoint to add a new menu item
    @PostMapping
    public ResponseEntity<AdminAdd> addMenuItem(@RequestBody AdminAdd adminAdd) {
        // Save the menu item using the service and return the saved item
        AdminAdd savedMenuItem = adminAddService.addMenuItem(adminAdd);
        return ResponseEntity.ok(savedMenuItem);
    }
}
