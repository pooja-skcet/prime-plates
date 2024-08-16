package com.example.demo.service.impl;

import com.example.demo.dto.OrderDTO;
import com.example.demo.entity.Order;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Creates a new order based on the provided OrderDTO
    @Override
    public Order createOrder(OrderDTO orderDTO) {
        // Create a new Order entity
        Order order = new Order();
        
        // Set the properties of the Order entity using values from OrderDTO
        order.setMenuItemName(orderDTO.getMenuItemName());
        order.setPrice(orderDTO.getPrice());
        order.setAddress(orderDTO.getAddress());
        order.setDate(orderDTO.getDate());
        order.setTime(orderDTO.getTime());
        order.setPaymentMode(orderDTO.getPaymentMode());
        order.setContactNumber(orderDTO.getContactNumber());

        // Save the Order entity to the database and return it
        return orderRepository.save(order);
    }
}
