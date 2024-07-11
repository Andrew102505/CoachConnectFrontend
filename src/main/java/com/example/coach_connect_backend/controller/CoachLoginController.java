package com.example.coach_connect_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach_connect_backend.exceptions.ResourceNotFoundException;
import com.example.coach_connect_backend.model.Coach;
import com.example.coach_connect_backend.model.LoginRequestToken;
import com.example.coach_connect_backend.repository.CoachRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/coachconnect/login/coach")
public class CoachLoginController {
	@Autowired
	private CoachRepository coachRepository;
	
	@PostMapping("/")
	public Coach AuthenticateCoach(@RequestBody LoginRequestToken token) {
		Coach c = coachRepository.getCoachByEmail(token.getEmail());
		if(c!=null&&c.getPassword()==token.getPassword()) {//token .getPassword is the password entered by the user in the login form
			return c;
		}else {
			throw new ResourceNotFoundException("Coach", "username", c.getEmail());
		}
	}
}
