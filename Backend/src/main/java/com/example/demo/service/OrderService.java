package com.example.demo.service;


	import com.example.demo.dto.OrderDTO;
	import com.example.demo.entity.Order;
	import java.util.List;

	public interface OrderService {
        
		 //Creates a new order based on the provided OrderDTO.
		 Order createOrder(OrderDTO orderDTO);
	

}
