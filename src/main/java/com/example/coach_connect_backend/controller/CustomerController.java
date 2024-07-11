package com.example.coach_connect_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach_connect_backend.model.Customer;
import com.example.coach_connect_backend.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")//have to add this because spring blocks cross site request mappings if if don't specify which origins we will allow requests from
@RestController
@RequestMapping("/coachconnect/customer/")
public class CustomerController {
	@Autowired
	private CustomerRepository customerRepository;
	
	@PostMapping("/customers")
	public Customer createCustomer(@RequestBody Customer customer) {
		//i think that the param will initialize a customer object given the request body information
		return customerRepository.save(customer);
	}
}
