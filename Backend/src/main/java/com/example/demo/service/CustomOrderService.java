package com.example.demo.service;
import com.example.demo.dto.CustomOrderDTO;

import java.util.List;
public interface CustomOrderService {
	
	
	// Create a new custom order
	CustomOrderDTO createOrder(CustomOrderDTO orderDTO);
	

}
