package com.example.coach_connect_backend.model;

import jakarta.persistence.Entity;
import lombok.Data;
@Data//makes this a jpa entity
@Entity
//called it CoachConnectAdmin since Admin is a reserved word in mysql
public class CoachConnectAdmin extends CoachConnectUser{
	//made admin a type of user because it requires all the same fields as a user
	public CoachConnectAdmin() {
		super();
		this.setRole("ADMIN");
	}
	
	public CoachConnectAdmin(String firstName, String lastName, String email, String password) {
		super(firstName, lastName, email, password, "ADMIN");
	}
}
