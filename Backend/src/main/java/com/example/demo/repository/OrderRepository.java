package com.example.demo.repository;



import com.example.demo.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	
	// JpaRepository provides CRUD operations and pagination for the Order entity
}
