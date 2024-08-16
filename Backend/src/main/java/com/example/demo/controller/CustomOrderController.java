package com.example.demo.controller;

import com.example.demo.dto.CustomOrderDTO;
import com.example.demo.service.CustomOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/customorders/add")
public class CustomOrderController {
    
    @Autowired
    private CustomOrderService customOrderService;

    // Endpoint to create a custom order
    @PostMapping
    public ResponseEntity<CustomOrderDTO> createOrder(@RequestBody CustomOrderDTO orderDTO) {
        // Calls the service layer to process the order and returns the created order
        return ResponseEntity.ok(customOrderService.createOrder(orderDTO));
    }
}
