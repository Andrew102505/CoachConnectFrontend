package com.example.coach_connect_backend.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Customer extends CoachConnectUser{
	
	public Customer() {
		super();
		this.setRole("CUSTOMER");
	}
	public Customer(String firstName, String lastName, String email, String password) {
		
		super(firstName, lastName, email, password, "CUSTOMER");
		
	}
}
