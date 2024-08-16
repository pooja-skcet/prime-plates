package com.example.demo.service.impl;

import com.example.demo.dto.CustomOrderDTO;
import com.example.demo.entity.CustomOrder;
import com.example.demo.repository.CustomOrderRepository;
import com.example.demo.service.CustomOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class CustomOrderServiceImpl implements CustomOrderService{
	
	
    
	    
	    
	    @Autowired
	    private CustomOrderRepository customOrderRepository; // Repository for custom orders

	    @Autowired
	    private ModelMapper modelMapper; // Mapper for DTO conversion

	    @Override
	    public CustomOrderDTO createOrder(CustomOrderDTO orderDTO) {
	        // Convert and save order, return DTO
	        CustomOrder order = modelMapper.map(orderDTO, CustomOrder.class);
	        order = customOrderRepository.save(order);
	        return modelMapper.map(order, CustomOrderDTO.class);
	    }

}
