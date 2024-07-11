package com.example.coach_connect_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach_connect_backend.exceptions.ResourceNotFoundException;
import com.example.coach_connect_backend.model.CoachConnectAdmin;
import com.example.coach_connect_backend.model.LoginRequestToken;
import com.example.coach_connect_backend.repository.CoachConnectAdminRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/coachconnect/login/admin")
public class AdminLoginController {
	
	@Autowired
	private CoachConnectAdminRepository adminRepository;
	
	@PostMapping("/")
	public CoachConnectAdmin AuthenticateAdmin(@RequestBody LoginRequestToken token) {
		
		CoachConnectAdmin a = adminRepository.getAdminByEmail(token.getEmail());
		if(a!=null && a.getPassword()==token.getPassword()) {
			return a;
		}else {
			throw new ResourceNotFoundException("CoachConnectAdmin", "username", a.getEmail());
		}
		
	}
}
