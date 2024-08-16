package com.example.demo.repository;
import com.example.demo.entity.CustomOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomOrderRepository extends JpaRepository<CustomOrder, Long>{
	
	// JpaRepository provides CRUD operations and pagination for the CutomOrder entity


}
