package com.example.coach_connect_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.coach_connect_backend.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	@Query(value = "SELECT * FROM customer WHERE email = :email", nativeQuery = true)
	Customer getCustomerByEmail(String email); 
}
