package com.example.coach_connect_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach_connect_backend.exceptions.ResourceNotFoundException;
import com.example.coach_connect_backend.model.Customer;
import com.example.coach_connect_backend.model.LoginRequestToken;
import com.example.coach_connect_backend.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/coachconnect/login/customer")
public class CustomerLoginController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@PostMapping("/")
	public Customer AuthenticateCoach(@RequestBody LoginRequestToken token) {//we make an object LoginRequestToken so that we can store the username and password in the body of the request rather than the url params, we have to pass info an object if we want to pass it in the request body
		//token contains email and password
		//what do we need to return the user in this method so we can have access to the user object 
		//however we will build out the rest of the application and come back to the login to see what we need
		Customer c = customerRepository.getCustomerByEmail(token.getEmail());
		if(c!=null && c.getPassword()==token.getPassword()) {
			return c;//returns the user
		}else {
			throw new ResourceNotFoundException("Customer", "username", c.getEmail());
		}
	}
}
