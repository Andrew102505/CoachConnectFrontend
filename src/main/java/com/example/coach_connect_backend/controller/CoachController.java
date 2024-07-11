package com.example.coach_connect_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach_connect_backend.model.Coach;
import com.example.coach_connect_backend.repository.CoachRepository;

@CrossOrigin(origins = "http://localhost:3000")//have to add this because spring blocks cross site request mappings if if don't specify which origins we will allow requests from
@RestController
@RequestMapping("/coachconnect/coach")
public class CoachController {
	
	@Autowired
	private CoachRepository coachRepository;
	
	//@PostMapping("/")
	//inside this post method you need to perform a check that the username and password hasn't
	//already been taken and transfer the values in the levels array into an arraylist
	@PostMapping("/coaches")
	public Coach createCoach(@RequestBody Coach coach) {
		//our constructor will convert levelsArray to an arraylist
		//the field names we pass in the frontend must match the field names in the backend for the entity and these getters and setters in the backend are tied to those fields(since we defined them in the entity class)
		Coach c = new Coach(coach.getFirstName(), coach.getLastName(), coach.getEmail(), coach.getPassword(), 
				coach.getLevelsObjectArray(), coach.getYearsOfExperience(), coach.getBio(), coach.getLocation());
		return coachRepository.save(c);//returns the saved entity(c in this case)
	}
	
}
